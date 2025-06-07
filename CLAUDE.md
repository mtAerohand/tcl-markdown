# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the TCL (Theorycrafting Library) markdown export repository. It contains:
- Scripts to convert the TCL Docusaurus site data into plain markdown
- Automated syncing from the upstream KQM-git/TCL repository
- Generated markdown outputs suitable for AI/tool consumption

## Key Commands

### From root directory:
```bash
# Generate all markdown outputs
node scripts/build-markdown.js

# Generate specific content types
node scripts/generate-characters.js
node scripts/generate-weapons.js
node scripts/generate-artifacts.js
node scripts/process-docs.js

# Verify generated content
node scripts/verify-content.js

# Compare outputs
node scripts/compare-outputs.js <dir1> <dir2>
```

### From TCL directory (for Docusaurus development):
```bash
cd TCL
npm install
npm start      # Start development server
npm run build  # Build static site
npm run serve  # Serve built site
```

## Architecture

### Repository Structure
- `/TCL/` - Submodule containing the upstream Docusaurus site
- `/scripts/` - Markdown generation and processing scripts
- `/outputs/` - Generated markdown outputs (git-ignored)
- `.github/workflows/` - Automated sync and generation workflows

### Data Flow
1. JSON data files in `/TCL/src/data/` contain structured game data
2. MDX documentation files in `/TCL/docs/` contain written content
3. Scripts in `/scripts/` process both data sources
4. Output is generated in `/outputs/` as plain markdown

### Key Script Responsibilities
- `build-markdown.js`: Orchestrates the entire markdown generation process
- `generate-*.js`: Convert specific JSON data types to markdown format
- `process-docs.js`: Strips React/MDX components from documentation files
- Custom React component removal for AI-friendly output

### Component Patterns
The scripts handle removal of:
- React components like `<CharStats>`, `<Weapon>`, `<Artifact>`
- MDX imports and exports
- Interactive elements (tabs, accordions)
- While preserving content structure and mathematical formulas

## Important Notes

- The TCL submodule tracks the upstream repository - avoid direct edits
- Generated outputs are not committed to avoid bloat
- GitHub Actions automatically sync and generate exports daily
- The workflow tracks last synced commit to prevent redundant runs
- Scripts have been configured to use the correct paths for this project structure