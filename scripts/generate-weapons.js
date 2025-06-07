const fs = require('fs');
const path = require('path');

// Import weapon curves
const weaponCurves = require('../../src/data/weapon_curves.json');

// Helper function to calculate weapon stats at specific level and ascension
function getWeaponStatsAt(weapon, lv, asc) {
  const stats = {};
  
  // Calculate stats for each curve
  for (const curve of weapon.weaponCurve) {
    const curveData = weaponCurves[curve.curve];
    const multiplier = curveData[lv - 1];
    stats[curve.stat] = curve.init * multiplier;
  }

  // Apply ascension stats
  const ascension = weapon.ascensions[asc];
  if (ascension) {
    for (const statUp of ascension.statsUp) {
      stats[statUp.stat] = (stats[statUp.stat] || 0) + statUp.value;
    }
  }

  return stats;
}

// Helper to format weapon stats table
function formatWeaponStatsTable(weapon) {
  let table = '| Level | Base ATK | Secondary Stat |\n';
  table += '| :--- | :--- | :--- |\n';

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

  // Determine secondary stat
  const secondaryStat = weapon.weaponCurve.find(c => c.stat !== 'Base ATK');

  for (const { lv, asc } of ascensionLevels) {
    const stats = getWeaponStatsAt(weapon, lv, asc);
    const baseAtk = Math.round(stats['Base ATK']);
    let secondaryValue = '-';
    
    if (secondaryStat) {
      const value = stats[secondaryStat.stat];
      if (secondaryStat.stat.includes('%') || secondaryStat.stat === 'CRIT Rate' || secondaryStat.stat === 'CRIT DMG') {
        secondaryValue = `${secondaryStat.stat}: ${(value * 100).toFixed(1)}%`;
      } else {
        secondaryValue = `${secondaryStat.stat}: ${Math.round(value)}`;
      }
    }
    
    const maxLevel = weapon.ascensions[Math.min(asc, weapon.ascensions.length - 1)].maxLevel;
    table += `| ${lv}/${maxLevel} | ${baseAtk} | ${secondaryValue} |\n`;
  }

  return table;
}

// Helper to clean refinement description
function cleanRefinementDesc(desc, r1Values) {
  if (!desc || !r1Values) return desc || '';
  
  let cleanedDesc = desc;
  
  // Replace parameter placeholders with R1 values
  r1Values.forEach((value, index) => {
    const placeholder = `{${index}}`;
    cleanedDesc = cleanedDesc.replace(new RegExp(placeholder, 'g'), value);
  });
  
  // Remove color tags and other formatting
  cleanedDesc = cleanedDesc.replace(/<color=[^>]+>|<\/color>|<i>|<\/i>|\\n/g, '');
  
  return cleanedDesc.trim();
}

// Process weapons by type
function processWeaponType(weaponType) {
  const weaponFile = `${weaponType}.json`;
  const weaponDataObj = JSON.parse(fs.readFileSync(path.join(__dirname, '../../src/data/weapons', weaponFile), 'utf8'));
  
  // Convert object to array
  const weaponData = Object.values(weaponDataObj);
  
  const outputDir = path.join(__dirname, '../../output/weapons', weaponType.toLowerCase());
  
  // Create output directory
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  // Group weapons by stars
  const weaponsByStars = {};
  for (const weapon of weaponData) {
    if (!weaponsByStars[weapon.stars]) {
      weaponsByStars[weapon.stars] = [];
    }
    weaponsByStars[weapon.stars].push(weapon);
  }

  // Generate markdown for each weapon
  for (const weapon of weaponData) {
    let markdown = `# ${weapon.name}\n\n`;
    
    // Basic info
    markdown += `**Type:** ${weapon.weaponType}\n`;
    markdown += `**Rarity:** ${weapon.stars}★\n\n`;

    // Stats
    markdown += `## Stats\n\n`;
    markdown += formatWeaponStatsTable(weapon);
    markdown += '\n';

    // Refinements
    if (weapon.refinements) {
      markdown += `## Refinement: ${weapon.refinements.name}\n\n`;
      
      // Get refinement description with R1 values
      const r1Values = weapon.refinements.params ? weapon.refinements.params[0] : [];
      const cleanDesc = cleanRefinementDesc(weapon.refinements.desc, r1Values);
      markdown += `${cleanDesc}\n\n`;
      
      // Refinement values table
      if (weapon.refinements.params && weapon.refinements.params.length > 0) {
        markdown += `### Refinement Values\n\n`;
        markdown += '| Level | ';
        
        // Generate headers for each parameter
        const numParams = weapon.refinements.params[0].length;
        for (let i = 0; i < numParams; i++) {
          markdown += `Value ${i + 1} | `;
        }
        markdown += '\n| :--- | ';
        for (let i = 0; i < numParams; i++) {
          markdown += ':--- | ';
        }
        markdown += '\n';
        
        // Add values for each refinement level
        for (let r = 0; r < weapon.refinements.params.length; r++) {
          markdown += `| R${r + 1} | `;
          for (const value of weapon.refinements.params[r]) {
            markdown += `${value} | `;
          }
          markdown += '\n';
        }
        markdown += '\n';
      }
    }

    // Write file
    const fileName = weapon.name.toLowerCase().replace(/[^a-z0-9]/g, '-');
    const outputPath = path.join(outputDir, `${fileName}.md`);
    fs.writeFileSync(outputPath, markdown);
    console.log(`Generated: ${weaponType.toLowerCase()}/${fileName}.md`);
  }

  // Also create an index file for each weapon type
  let indexMarkdown = `# ${weaponType}\n\n`;
  
  // Sort stars in descending order
  const sortedStars = Object.keys(weaponsByStars).sort((a, b) => b - a);
  
  for (const stars of sortedStars) {
    indexMarkdown += `## ${stars} Star ${weaponType}\n\n`;
    
    const weapons = weaponsByStars[stars].sort((a, b) => a.name.localeCompare(b.name));
    for (const weapon of weapons) {
      const fileName = weapon.name.toLowerCase().replace(/[^a-z0-9]/g, '-');
      indexMarkdown += `- [${weapon.name}](./${fileName}.md)\n`;
    }
    indexMarkdown += '\n';
  }

  const indexPath = path.join(outputDir, 'index.md');
  fs.writeFileSync(indexPath, indexMarkdown);
}

// Main function
function generateWeaponMarkdown() {
  const weaponTypes = ['Bow', 'Catalyst', 'Claymore', 'Polearm', 'Sword'];
  
  console.log('Generating weapon markdown files...');
  
  for (const weaponType of weaponTypes) {
    try {
      processWeaponType(weaponType);
    } catch (error) {
      console.error(`Error processing ${weaponType}:`, error.message);
    }
  }
}

// Run if called directly
if (require.main === module) {
  generateWeaponMarkdown();
}

module.exports = { generateWeaponMarkdown };