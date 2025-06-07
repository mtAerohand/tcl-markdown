const fs = require('fs');
const path = require('path');

// Process markdown files to remove MDX components and convert to plain markdown
function processMarkdownFile(filePath, outputPath) {
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Remove frontmatter
  content = content.replace(/^---[\s\S]*?---\n*/m, '');
  
  // Remove import statements
  content = content.replace(/^import .*$/gm, '');
  
  // Remove JSX/React components
  content = content.replace(/<[A-Z][^>]*>[\s\S]*?<\/[A-Z][^>]*>/g, '[Component content removed]');
  content = content.replace(/<[A-Z][^>]*\/>/g, '[Component removed]');
  
  // Remove Tabs and TabItem components but keep content
  content = content.replace(/<Tabs[^>]*>/g, '');
  content = content.replace(/<\/Tabs>/g, '');
  content = content.replace(/<TabItem[^>]*label=['"]([^'"]+)['"][^>]*>/g, '\n### $1\n');
  content = content.replace(/<\/TabItem>/g, '');
  
  // Remove div tags but keep content
  content = content.replace(/<div[^>]*>/g, '');
  content = content.replace(/<\/div>/g, '');
  
  // Remove blockquote JSX but keep as markdown blockquote
  content = content.replace(/<blockquote>([^<]+)<\/blockquote>/g, '> $1');
  
  // Clean up excessive newlines
  content = content.replace(/\n{3,}/g, '\n\n');
  
  // Write processed file
  fs.writeFileSync(outputPath, content.trim());
}

// Recursively process all markdown files in a directory
function processDirectory(inputDir, outputDir) {
  // Create output directory if it doesn't exist
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  const entries = fs.readdirSync(inputDir, { withFileTypes: true });

  for (const entry of entries) {
    const inputPath = path.join(inputDir, entry.name);
    const outputPath = path.join(outputDir, entry.name);

    if (entry.isDirectory()) {
      // Skip special directories
      if (entry.name.startsWith('_') || entry.name === 'node_modules') {
        continue;
      }
      // Recursively process subdirectories
      processDirectory(inputPath, outputPath);
    } else if (entry.isFile() && entry.name.endsWith('.md')) {
      // Process markdown files
      try {
        processMarkdownFile(inputPath, outputPath);
        console.log(`Processed: ${inputPath} -> ${outputPath}`);
      } catch (error) {
        console.error(`Error processing ${inputPath}:`, error.message);
      }
    }
  }
}

// Main function to process documentation
function processDocumentation() {
  const docsDir = path.join(__dirname, '../TCL/docs');
  const outputBaseDir = path.join(__dirname, '../outputs');

  // Process main categories
  const categories = [
    'combat-mechanics',
    'enemy-data',
    'general-mechanics',
    'resources'
  ];

  for (const category of categories) {
    const inputDir = path.join(docsDir, category);
    const outputDir = path.join(outputBaseDir, category);
    
    if (fs.existsSync(inputDir)) {
      console.log(`\nProcessing ${category}...`);
      processDirectory(inputDir, outputDir);
    }
  }

  // Process evidence vault
  const evidenceDir = path.join(docsDir, 'evidence');
  const evidenceOutputDir = path.join(outputBaseDir, 'evidence');
  
  if (fs.existsSync(evidenceDir)) {
    console.log('\nProcessing evidence vault...');
    processDirectory(evidenceDir, evidenceOutputDir);
  }

  // Copy main README
  const mainReadme = path.join(docsDir, 'README.md');
  if (fs.existsSync(mainReadme)) {
    processMarkdownFile(mainReadme, path.join(outputBaseDir, 'README.md'));
    console.log('Processed main README.md');
  }
}

// Run if called directly
if (require.main === module) {
  processDocumentation();
}

module.exports = { processDocumentation };