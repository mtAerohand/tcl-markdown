const fs = require('fs');
const path = require('path');

// Main function to generate artifact markdown
function generateArtifactMarkdown() {
  const artifactsDataObj = JSON.parse(fs.readFileSync(path.join(__dirname, '../TCL/src/data/artifacts.json'), 'utf8'));
  
  // Convert object to array
  const artifactsData = Object.values(artifactsDataObj);
  
  const outputDir = path.join(__dirname, '../outputs/artifacts');
  
  // Create output directory
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  // Group artifacts by star rating
  const artifactsByStars = {};
  for (const artifact of artifactsData) {
    const stars = determineArtifactStars(artifact.name);
    if (!artifactsByStars[stars]) {
      artifactsByStars[stars] = [];
    }
    artifactsByStars[stars].push(artifact);
  }

  // Generate individual artifact files
  for (const artifact of artifactsData) {
    let markdown = `# ${artifact.name}\n\n`;
    
    // Set bonuses
    markdown += `## Set Bonuses\n\n`;
    for (const bonus of artifact.bonuses) {
      markdown += `**${bonus.count}-Piece Bonus:** ${cleanDescription(bonus.desc)}\n\n`;
    }

    // Additional notes from the main artifacts.md file (if we had them)
    markdown += `## Notes\n\n`;
    markdown += `*Additional notes and findings about this artifact set would be documented here.*\n\n`;

    // Write file
    const fileName = artifact.name.toLowerCase().replace(/[^a-z0-9]/g, '-');
    const outputPath = path.join(outputDir, `${fileName}.md`);
    fs.writeFileSync(outputPath, markdown);
    console.log(`Generated: artifacts/${fileName}.md`);
  }

  // Create index file
  let indexMarkdown = `# Artifacts\n\n`;
  
  // Sort stars in descending order
  const sortedStars = Object.keys(artifactsByStars).sort((a, b) => b - a);
  
  for (const stars of sortedStars) {
    indexMarkdown += `## ${stars} Star Artifact Sets\n\n`;
    
    const artifacts = artifactsByStars[stars].sort((a, b) => a.name.localeCompare(b.name));
    for (const artifact of artifacts) {
      const fileName = artifact.name.toLowerCase().replace(/[^a-z0-9]/g, '-');
      indexMarkdown += `- [${artifact.name}](./${fileName}.md)\n`;
    }
    indexMarkdown += '\n';
  }

  const indexPath = path.join(outputDir, 'index.md');
  fs.writeFileSync(indexPath, indexMarkdown);
  console.log('Generated: artifacts/index.md');
}

// Helper to determine artifact star rating based on name
function determineArtifactStars(name) {
  // 5-star artifacts (most common endgame sets)
  const fiveStarArtifacts = [
    'Archaic Petra', 'Blizzard Strayer', 'Bloodstained Chivalry', 'Crimson Witch of Flames',
    'Deepwood Memories', 'Desert Pavilion Chronicle', 'Echoes of an Offering', 'Emblem of Severed Fate',
    'Finale of the Deep Galleries', 'Flower of Paradise Lost', 'Fragment of Harmonic Whimsy',
    'Gilded Dreams', 'Gladiator\'s Finale', 'Golden Troupe', 'Heart of Depth',
    'Husk of Opulent Dreams', 'Lavawalker', 'Maiden Beloved', 'Marechaussee Hunter',
    'Nighttime Whispers in the Echoing Woods', 'Noblesse Oblige', 'Nymph\'s Dream',
    'Obsidian Codex', 'Ocean-Hued Clam', 'Pale Flame', 'Retracing Bolide',
    'Scroll of the Hero of Cinder City', 'Shimenawa\'s Reminiscence', 'Song of Days Past',
    'Tenacity of the Millelith', 'Thundering Fury', 'Thundersoother', 'Unfinished Reverie',
    'Vermillion Hereafter', 'Viridescent Venerer', 'Vourukasha\'s Glow', 'Wanderer\'s Troupe'
  ];

  // 4-star artifacts
  const fourStarArtifacts = [
    'Berserker', 'Brave Heart', 'Defender\'s Will', 'Gambler', 'Instructor',
    'Martial Artist', 'Prayers for Destiny', 'Prayers for Illumination',
    'Prayers for Wisdom', 'Prayers to Springtime', 'Resolution of Sojourner',
    'Scholar', 'The Exile', 'Tiny Miracle'
  ];

  // 3-star artifacts and below
  const threeStarArtifacts = [
    'Adventurer', 'Lucky Dog', 'Traveling Doctor'
  ];

  if (fiveStarArtifacts.includes(name)) return 5;
  if (fourStarArtifacts.includes(name)) return 4;
  if (threeStarArtifacts.includes(name)) return 3;
  
  // Default to 5-star if unknown
  return 5;
}

// Helper to clean description text
function cleanDescription(desc) {
  if (!desc) return '';
  // Remove color tags and other formatting
  return desc.replace(/<color=[^>]+>|<\/color>|<i>|<\/i>|\\n/g, '').trim();
}

// Run if called directly
if (require.main === module) {
  generateArtifactMarkdown();
}

module.exports = { generateArtifactMarkdown };