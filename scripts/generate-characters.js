const fs = require('fs');
const path = require('path');

// Import character curves and frame data
const characterCurves = require('../TCL/src/data/character_curves.json');
const elementalCurves = require('../TCL/src/data/elemental_curves/player.json');

// Helper function to calculate character stats at specific level and ascension
function getCharStatsAt(char, lv, asc) {
  const baseStats = char.baseStats;
  const ascension = char.ascensions[asc];
  
  const stats = {
    'Base HP': baseStats.hpBase,
    'Base ATK': baseStats.attackBase,
    'Base DEF': baseStats.defenseBase,
    'CRIT Rate': baseStats.criticalBase,
    'CRIT DMG': baseStats.criticalDmgBase
  };

  // Apply level scaling
  for (const curve of char.curves) {
    const curveData = characterCurves[curve.curve];
    const multiplier = curveData[lv - 1];
    stats[curve.name] = stats[curve.name] * multiplier;
  }

  // Apply ascension stats
  if (ascension) {
    for (const statUp of ascension.statsUp) {
      stats[statUp.stat] = (stats[statUp.stat] || 0) + statUp.value;
    }
  }

  return stats;
}

// Helper to format stats table
function formatStatsTable(char) {
  let table = '| Level | HP | ATK | DEF | CRIT Rate | CRIT DMG | Ascension Stat |\n';
  table += '| :--- | :--- | :--- | :--- | :--- | :--- | :--- |\n';

  const ascensionLevels = [
    { lv: 1, asc: 0 },
    { lv: 20, asc: 0 },
    { lv: 20, asc: 1 },
    { lv: 40, asc: 1 },
    { lv: 40, asc: 2 },
    { lv: 50, asc: 2 },
    { lv: 50, asc: 3 },
    { lv: 60, asc: 3 },
    { lv: 60, asc: 4 },
    { lv: 70, asc: 4 },
    { lv: 70, asc: 5 },
    { lv: 80, asc: 5 },
    { lv: 80, asc: 6 },
    { lv: 90, asc: 6 }
  ];

  for (const { lv, asc } of ascensionLevels) {
    const stats = getCharStatsAt(char, lv, asc);
    const ascStat = char.ascensions[asc]?.statsUp[0];
    const ascDisplay = ascStat ? `${ascStat.stat}: ${ascStat.value}` : '-';
    
    table += `| ${lv}/${char.ascensions[Math.min(asc, char.ascensions.length - 1)].maxLevel} | ${Math.round(stats['Base HP'])} | ${Math.round(stats['Base ATK'])} | ${Math.round(stats['Base DEF'])} | ${(stats['CRIT Rate'] * 100).toFixed(1)}% | ${(stats['CRIT DMG'] * 100).toFixed(1)}% | ${ascDisplay} |\n`;
  }

  return table;
}

// Helper to format talent table
function formatTalentTable(talentData) {
  if (!talentData || talentData.length === 0) return '';
  
  let table = '| Attribute | Lv1 | Lv2 | Lv3 | Lv4 | Lv5 | Lv6 | Lv7 | Lv8 | Lv9 | Lv10 | Lv11 | Lv12 | Lv13 | Lv14 | Lv15 |\n';
  table += '| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |\n';

  for (const row of talentData) {
    if (row.values && Array.isArray(row.values)) {
      table += `| ${row.name} | ${row.values.slice(0, 15).join(' | ')} |\n`;
    }
  }

  return table;
}

// Helper to clean description text
function cleanDescription(desc) {
  if (!desc) return '';
  // Remove color tags and other formatting
  return desc.replace(/<color=[^>]+>|<\/color>|<i>|<\/i>|\\n/g, '').trim();
}

// Process a single character
function processCharacter(charFile) {
  const charData = JSON.parse(fs.readFileSync(path.join(__dirname, '../TCL/src/data/characters', charFile), 'utf8'));
  const charName = charData.name;
  const fileName = charFile.replace('.json', '').toLowerCase().replace(/_/g, '-');
  
  // Try to load frame data if it exists
  let frameData = null;
  const frameFile = charFile.replace('.json', '.json');
  const framePath = path.join(__dirname, '../TCL/src/data/frames', frameFile);
  if (fs.existsSync(framePath)) {
    try {
      frameData = JSON.parse(fs.readFileSync(framePath, 'utf8'));
    } catch (e) {
      console.log(`No frame data for ${charName}`);
    }
  }

  let markdown = `# ${charName}\n\n`;
  
  // Basic info
  markdown += `**Stars:** ${charData.star}★\n`;
  markdown += `**Element:** ${determineElement(fileName)}\n`;
  markdown += `**Weapon Type:** ${charData.weaponType}\n\n`;

  // Base Stats
  markdown += `## Base Stats\n\n`;
  markdown += formatStatsTable(charData);
  markdown += '\n';

  // Talents
  markdown += `## Talents\n\n`;
  
  // Normal Attack
  if (charData.skill.talents[0]) {
    const normalAttack = charData.skill.talents[0];
    markdown += `### Normal Attack: ${normalAttack.name}\n\n`;
    markdown += `${cleanDescription(normalAttack.desc)}\n\n`;
    if (normalAttack.talentTable && normalAttack.talentTable.length > 0) {
      markdown += formatTalentTable(normalAttack.talentTable);
      markdown += '\n';
    }
  }

  // Elemental Skill
  if (charData.skill.talents[1]) {
    const skill = charData.skill.talents[1];
    markdown += `### Elemental Skill: ${skill.name}\n\n`;
    markdown += `${cleanDescription(skill.desc)}\n\n`;
    if (skill.talentTable && skill.talentTable.length > 0) {
      markdown += formatTalentTable(skill.talentTable);
      markdown += '\n';
    }
  }

  // Elemental Burst
  if (charData.skill.ult) {
    const burst = charData.skill.ult;
    markdown += `### Elemental Burst: ${burst.name}\n\n`;
    markdown += `${cleanDescription(burst.desc)}\n\n`;
    if (burst.talentTable && burst.talentTable.length > 0) {
      markdown += formatTalentTable(burst.talentTable);
      markdown += '\n';
    }
  }

  // Passives
  if (charData.skill.passive && charData.skill.passive.length > 0) {
    markdown += `## Passive Talents\n\n`;
    for (const passive of charData.skill.passive) {
      markdown += `### ${passive.name}\n\n`;
      markdown += `${cleanDescription(passive.desc)}\n\n`;
    }
  }

  // Constellations
  if (charData.skill.constellations && charData.skill.constellations.length > 0) {
    markdown += `## Constellations\n\n`;
    for (let i = 0; i < charData.skill.constellations.length; i++) {
      const constellation = charData.skill.constellations[i];
      markdown += `### C${i + 1}: ${constellation.name}\n\n`;
      markdown += `${cleanDescription(constellation.desc)}\n\n`;
    }
  }

  // Frame Data (if available)
  if (frameData) {
    markdown += `## Frame Data\n\n`;
    
    // Normal Attack frames
    if (frameData.normal) {
      markdown += `### Normal Attack\n\n`;
      markdown += '| Attack | Frames | Motion Value |\n';
      markdown += '| :--- | :--- | :--- |\n';
      
      const normalData = Array.isArray(frameData.normal) ? frameData.normal : [frameData.normal];
      for (let i = 0; i < normalData.length; i++) {
        const data = normalData[i];
        if (data.hitmark) {
          markdown += `| N${i + 1} | ${data.hitmark} | - |\n`;
        }
      }
      markdown += '\n';
    }

    // Charged Attack frames
    if (frameData.charged) {
      markdown += `### Charged Attack\n\n`;
      const chargedData = frameData.charged;
      markdown += `**Frames:** ${chargedData.hitmark || 'N/A'}\n\n`;
    }

    // Skill frames
    if (frameData.skill) {
      markdown += `### Elemental Skill\n\n`;
      const skillData = frameData.skill;
      markdown += `**Frames:** ${skillData.hitmark || 'N/A'}\n`;
      if (skillData.cd) {
        markdown += `**Cooldown:** ${skillData.cd}s\n`;
      }
      markdown += '\n';
    }

    // Burst frames
    if (frameData.burst) {
      markdown += `### Elemental Burst\n\n`;
      const burstData = frameData.burst;
      markdown += `**Frames:** ${burstData.hitmark || 'N/A'}\n`;
      if (burstData.cd) {
        markdown += `**Cooldown:** ${burstData.cd}s\n`;
      }
      if (burstData.energy) {
        markdown += `**Energy Cost:** ${burstData.energy}\n`;
      }
      markdown += '\n';
    }
  }

  return { fileName, markdown };
}

// Helper to determine element from file path
function determineElement(fileName) {
  if (fileName.includes('anemo')) return 'Anemo';
  if (fileName.includes('cryo')) return 'Cryo';
  if (fileName.includes('dendro')) return 'Dendro';
  if (fileName.includes('electro')) return 'Electro';
  if (fileName.includes('geo')) return 'Geo';
  if (fileName.includes('hydro')) return 'Hydro';
  if (fileName.includes('pyro')) return 'Pyro';
  return 'Unknown';
}

// Main function
function generateCharacterMarkdown() {
  const outputDir = path.join(__dirname, '../outputs/characters');
  
  // Create output directory
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  // Get all character files
  const charDir = path.join(__dirname, '../TCL/src/data/characters');
  const charFiles = fs.readdirSync(charDir).filter(f => f.endsWith('.json'));

  console.log(`Found ${charFiles.length} character files`);

  // Process each character
  for (const charFile of charFiles) {
    try {
      const { fileName, markdown } = processCharacter(charFile);
      const outputPath = path.join(outputDir, `${fileName}.md`);
      fs.writeFileSync(outputPath, markdown);
      console.log(`Generated: ${fileName}.md`);
    } catch (error) {
      console.error(`Error processing ${charFile}:`, error.message);
    }
  }
}

// Run if called directly
if (require.main === module) {
  generateCharacterMarkdown();
}

module.exports = { generateCharacterMarkdown };