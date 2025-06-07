#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { generateCharacterMarkdown } = require('./generate-characters');
const { generateWeaponMarkdown } = require('./generate-weapons');
const { generateArtifactMarkdown } = require('./generate-artifacts');
const { processDocumentation } = require('./process-docs');

// Main build function
async function buildMarkdownDocs() {
  console.log('=== TCL Markdown Generator ===\n');
  
  const outputDir = path.join(__dirname, '../outputs');
  
  // Clean output directory
  if (fs.existsSync(outputDir)) {
    console.log('Cleaning output directory...');
    fs.rmSync(outputDir, { recursive: true, force: true });
  }
  
  // Create output directory
  fs.mkdirSync(outputDir, { recursive: true });
  
  try {
    // Generate character markdown
    console.log('\n1. Generating character documentation...');
    generateCharacterMarkdown();
    
    // Generate weapon markdown
    console.log('\n2. Generating weapon documentation...');
    generateWeaponMarkdown();
    
    // Generate artifact markdown
    console.log('\n3. Generating artifact documentation...');
    generateArtifactMarkdown();
    
    // Process existing documentation
    console.log('\n4. Processing existing documentation...');
    processDocumentation();
    
    // Create main index file
    console.log('\n5. Creating main index...');
    createMainIndex();
    
    console.log('\n=== Build Complete! ===');
    console.log(`\nAll markdown files have been generated in: ${outputDir}`);
    
  } catch (error) {
    console.error('\nBuild failed:', error);
    process.exit(1);
  }
}

// Create main index file
function createMainIndex() {
  const outputDir = path.join(__dirname, '../outputs');
  
  const indexContent = `# Theorycrafting Library - Markdown Export

This is a plain markdown export of the Theorycrafting Library (TCL) content, suitable for use with AI agents and other tools that need structured data.

## Contents

### Character Data
- [All Characters](./characters/) - Detailed stats, talents, and constellations for all characters

### Weapon Data
- [Bows](./weapons/bow/)
- [Catalysts](./weapons/catalyst/)
- [Claymores](./weapons/claymore/)
- [Polearms](./weapons/polearm/)
- [Swords](./weapons/sword/)

### Artifact Sets
- [All Artifacts](./artifacts/) - Set bonuses and effects

### Game Mechanics
- [Combat Mechanics](./combat-mechanics/) - Damage formulas, elemental reactions, etc.
- [Enemy Data](./enemy-data/) - Enemy stats and resistances
- [General Mechanics](./general-mechanics/) - Movement, resources, and more

### Evidence Vault
- [Evidence](./evidence/) - Detailed findings and research

### Resources
- [Compendiums](./resources/compendiums/) - Quick reference guides
- [Tools](./resources/tools/) - Useful tools and calculators

## Notes

- This export contains data extracted from JSON files and processed markdown documentation
- React components and interactive elements have been removed
- Some formatting may differ from the original website
- For the full interactive experience, visit https://library.keqingmains.com

## Data Sources

- Character data: Extracted from \`TCL/src/data/characters/\`
- Weapon data: Extracted from \`TCL/src/data/weapons/\`
- Artifact data: Extracted from \`TCL/src/data/artifacts.json\`
- Documentation: Processed from \`TCL/docs/\` directory

Generated on: ${new Date().toISOString()}
`;

  fs.writeFileSync(path.join(outputDir, 'index.md'), indexContent);
  console.log('Created main index.md');
}

// Run the build
if (require.main === module) {
  buildMarkdownDocs();
}