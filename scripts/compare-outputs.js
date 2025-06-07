const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

// Helper to extract text content from HTML
function extractTextFromHTML(htmlContent) {
  // Remove script and style tags first
  htmlContent = htmlContent.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
  htmlContent = htmlContent.replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, '');
  
  const dom = new JSDOM(htmlContent);
  const document = dom.window.document;
  
  // Remove navigation, footer, and other non-content elements
  const elementsToRemove = document.querySelectorAll('nav, footer, .navbar, .footer, .sidebar, .theme-doc-sidebar-container');
  elementsToRemove.forEach(el => el.remove());
  
  // Get main content
  const mainContent = document.querySelector('main') || document.querySelector('article') || document.body;
  
  // Extract tables specially to preserve structure
  const tables = [];
  const tableElements = mainContent.querySelectorAll('table');
  tableElements.forEach((table, index) => {
    const tableData = [];
    const rows = table.querySelectorAll('tr');
    rows.forEach(row => {
      const cells = row.querySelectorAll('td, th');
      const rowData = Array.from(cells).map(cell => cell.textContent.trim());
      tableData.push(rowData);
    });
    tables.push({ index, data: tableData });
    // Mark table location in text
    table.textContent = `[TABLE_${index}]`;
  });
  
  // Get text content
  let text = mainContent.textContent || '';
  
  // Clean up text
  text = text.replace(/\s+/g, ' ').trim();
  
  return { text, tables };
}

// Helper to extract content from markdown
function extractTextFromMarkdown(mdContent) {
  // Remove frontmatter
  mdContent = mdContent.replace(/^---[\s\S]*?---\n*/m, '');
  
  // Extract tables
  const tables = [];
  const tableRegex = /\|[^\n]+\|[\s\S]*?\n(?:\|[^\n]+\|\n)*/g;
  let tableMatch;
  let tableIndex = 0;
  
  while ((tableMatch = tableRegex.exec(mdContent)) !== null) {
    const tableText = tableMatch[0];
    const rows = tableText.trim().split('\n').filter(row => row.trim() && !row.match(/^\|[\s\-:]+\|$/));
    const tableData = rows.map(row => 
      row.split('|').map(cell => cell.trim()).filter(cell => cell)
    );
    tables.push({ index: tableIndex, data: tableData });
    tableIndex++;
  }
  
  // Replace tables with markers
  mdContent = mdContent.replace(tableRegex, (match, offset) => {
    const index = tables.findIndex(t => t.index >= 0);
    return `[TABLE_${index}]`;
  });
  
  // Remove markdown formatting
  mdContent = mdContent.replace(/#{1,6}\s+/g, ''); // Headers
  mdContent = mdContent.replace(/\*\*([^*]+)\*\*/g, '$1'); // Bold
  mdContent = mdContent.replace(/\*([^*]+)\*/g, '$1'); // Italic
  mdContent = mdContent.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1'); // Links
  mdContent = mdContent.replace(/`([^`]+)`/g, '$1'); // Inline code
  mdContent = mdContent.replace(/```[\s\S]*?```/g, ''); // Code blocks
  mdContent = mdContent.replace(/>\s+/g, ''); // Blockquotes
  mdContent = mdContent.replace(/\n\s*\n/g, ' '); // Multiple newlines
  
  const text = mdContent.replace(/\s+/g, ' ').trim();
  
  return { text, tables };
}

// Compare two sets of content
function compareContent(htmlData, mdData, filePath) {
  const report = {
    file: filePath,
    textMatch: false,
    tableMismatch: [],
    missingInMarkdown: [],
    missingInHTML: [],
    differences: []
  };
  
  // Normalize texts for comparison
  const htmlText = htmlData.text.toLowerCase().replace(/[^\w\s]/g, '');
  const mdText = mdData.text.toLowerCase().replace(/[^\w\s]/g, '');
  
  // Check if main text content is similar (using simple substring matching)
  const minLength = Math.min(htmlText.length, mdText.length);
  let matchingChars = 0;
  
  for (let i = 0; i < minLength; i++) {
    if (htmlText[i] === mdText[i]) matchingChars++;
  }
  
  const similarity = matchingChars / Math.max(htmlText.length, mdText.length);
  report.textMatch = similarity > 0.7; // 70% similarity threshold
  
  // Compare tables
  htmlData.tables.forEach((htmlTable, index) => {
    const mdTable = mdData.tables[index];
    if (!mdTable) {
      report.tableMismatch.push(`Table ${index} missing in markdown`);
      return;
    }
    
    // Compare table dimensions
    if (htmlTable.data.length !== mdTable.data.length) {
      report.tableMismatch.push(`Table ${index} row count mismatch: HTML=${htmlTable.data.length}, MD=${mdTable.data.length}`);
    }
    
    // Compare table content (sample check)
    const maxRows = Math.min(htmlTable.data.length, mdTable.data.length, 5); // Check first 5 rows
    for (let row = 0; row < maxRows; row++) {
      const htmlRow = htmlTable.data[row] || [];
      const mdRow = mdTable.data[row] || [];
      
      if (htmlRow.length !== mdRow.length) {
        report.tableMismatch.push(`Table ${index} row ${row} column count mismatch`);
      }
    }
  });
  
  // Check for missing tables
  if (mdData.tables.length < htmlData.tables.length) {
    report.missingInMarkdown.push(`${htmlData.tables.length - mdData.tables.length} tables missing in markdown`);
  }
  
  return report;
}

// Main comparison function
async function compareOutputs() {
  console.log('=== TCL Output Comparison Tool ===\n');
  
  const buildDir = path.join(__dirname, '../../build');
  const outputDir = path.join(__dirname, '../../output');
  
  // Check specific files for comparison
  const comparisons = [
    {
      html: 'characters/anemo/kaedehara-kazuha.html',
      md: 'characters/kaedehara-kazuha.md',
      type: 'character'
    },
    {
      html: 'equipment/weapons/swords.html', 
      md: 'weapons/sword/index.md',
      type: 'weapon-list'
    },
    {
      html: 'equipment/artifacts.html',
      md: 'artifacts/index.md', 
      type: 'artifact-list'
    },
    {
      html: 'combat-mechanics/damage/damage-formula.html',
      md: 'combat-mechanics/damage/damage-formula.md',
      type: 'mechanics'
    }
  ];
  
  const reports = [];
  
  for (const comp of comparisons) {
    const htmlPath = path.join(buildDir, comp.html);
    const mdPath = path.join(outputDir, comp.md);
    
    console.log(`\nComparing ${comp.type}: ${comp.html} vs ${comp.md}`);
    
    try {
      // Check if files exist
      if (!fs.existsSync(htmlPath)) {
        console.log(`  HTML file not found: ${htmlPath}`);
        continue;
      }
      if (!fs.existsSync(mdPath)) {
        console.log(`  Markdown file not found: ${mdPath}`);
        continue;
      }
      
      // Read files
      const htmlContent = fs.readFileSync(htmlPath, 'utf8');
      const mdContent = fs.readFileSync(mdPath, 'utf8');
      
      // Extract content
      const htmlData = extractTextFromHTML(htmlContent);
      const mdData = extractTextFromMarkdown(mdContent);
      
      // Compare
      const report = compareContent(htmlData, mdData, comp.type);
      reports.push(report);
      
      // Print summary
      console.log(`  Text similarity: ${report.textMatch ? 'GOOD' : 'POOR'}`);
      console.log(`  Tables found - HTML: ${htmlData.tables.length}, Markdown: ${mdData.tables.length}`);
      
      if (report.tableMismatch.length > 0) {
        console.log(`  Table issues: ${report.tableMismatch.length}`);
        report.tableMismatch.slice(0, 3).forEach(issue => console.log(`    - ${issue}`));
      }
      
      if (report.missingInMarkdown.length > 0) {
        console.log(`  Missing in markdown:`);
        report.missingInMarkdown.forEach(item => console.log(`    - ${item}`));
      }
      
    } catch (error) {
      console.error(`  Error comparing: ${error.message}`);
    }
  }
  
  // Overall summary
  console.log('\n=== Overall Summary ===');
  const successCount = reports.filter(r => r.textMatch && r.tableMismatch.length === 0).length;
  console.log(`Successfully converted: ${successCount}/${reports.length} files`);
  
  const tableIssues = reports.reduce((sum, r) => sum + r.tableMismatch.length, 0);
  if (tableIssues > 0) {
    console.log(`Total table issues: ${tableIssues}`);
  }
  
  // Save detailed report
  const reportPath = path.join(__dirname, '../../output/comparison-report.json');
  fs.writeFileSync(reportPath, JSON.stringify(reports, null, 2));
  console.log(`\nDetailed report saved to: ${reportPath}`);
}

// Run if called directly
if (require.main === module) {
  // Check if jsdom is installed
  try {
    require('jsdom');
  } catch (e) {
    console.error('Error: jsdom is required for HTML parsing.');
    console.error('Please install it with: npm install jsdom');
    process.exit(1);
  }
  
  compareOutputs().catch(console.error);
}

module.exports = { compareOutputs };