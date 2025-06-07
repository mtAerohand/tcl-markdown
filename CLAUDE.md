# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This repository is a documentation synchronization project that:
- Syncs content from the upstream KQM-git/TCL (KeqingMains Theorycrafting Library) repository
- Converts Docusaurus-based documentation to markdown format
- Contains Genshin Impact theorycrafting documentation including character guides, combat mechanics, and equipment information

## Repository Structure

- `TCL/` - The Docusaurus documentation site (cloned from upstream)
  - `docs/` - Main documentation content (characters, combat mechanics, equipment)
  - `evidence/` - Evidence and testing documentation
  - `tcg/` - Trading Card Game documentation
  - `src/` - React components for the documentation site
- `.github/workflows/generate-md.yaml` - GitHub Actions workflow for syncing upstream changes
- `scripts/` - Directory for conversion scripts (currently empty, needs implementation)

## Common Commands

### Development Commands (run from TCL/ directory)
```bash
# Install dependencies
npm ci

# Start local development server
npm run start

# Build the documentation site
npm run build

# Type check the codebase
npm run typecheck

# Serve the built site locally
npm run serve
```

## Architecture & Key Concepts

### Documentation Sync Process
The repository is designed to automatically sync documentation from the upstream KQM TCL repository:

1. **GitHub Actions Workflow** (`.github/workflows/generate-md.yaml`):
   - Runs daily at 2 AM UTC or can be triggered manually
   - Checks for upstream changes by comparing commit hashes
   - Clones the upstream repository when changes are detected
   - Runs export scripts to convert Docusaurus content to markdown
   - Commits and pushes the converted documentation

2. **Missing Implementation**:
   The following scripts referenced in the workflow need to be created:
   - `scripts/export-from-docusaurus.js` - Converts Docusaurus MDX files to standard markdown
   - `scripts/update-metadata.js` - Updates metadata with upstream commit information

### Docusaurus Configuration
- Site configuration in `TCL/docusaurus.config.js`
- Uses custom React components for character data, weapons, artifacts
- Supports LaTeX math rendering with KaTeX
- Custom redirects for character aliases (e.g., /hutao → /characters/pyro/hu-tao)
- Typesense search integration

### Content Structure
- **Character documentation**: Organized by element (anemo, cryo, dendro, etc.)
- **Combat mechanics**: Damage formulas, elemental reactions, energy mechanics
- **Equipment**: Weapons (by type) and artifacts
- **Evidence**: Testing and verification documentation mirroring the main structure

### Component Architecture
The site uses custom React components for rendering game data:
- Character components: `CharStatsTable`, `Talent`, `Constellation`
- Weapon components: `Weapon`, `WeaponStats`
- Artifact components: `Artifact`, `ArtifactSetBonus`
- Common components: `Video`, `Embed`, various input components

All character and weapon data is stored as JSON files in `src/data/`.

## Implementation Priority

To complete the repository setup, implement:
1. `scripts/export-from-docusaurus.js` - Parse MDX files, convert custom components to markdown, handle LaTeX math
2. `scripts/update-metadata.js` - Track sync status and upstream commit information
3. Create `scripts/` directory if it doesn't exist