# TCL Markdown Generator

This tool generates plain markdown files from the Theorycrafting Library's data sources, making the content suitable for AI agents and other tools that need structured data without React components or MDX features.

## Usage

From the scripts directory, run:

```bash
node build-markdown.js
```

Or run individual scripts:

```bash
node generate-characters.js    # Generate character documentation
node generate-weapons.js       # Generate weapon documentation  
node generate-artifacts.js     # Generate artifact documentation
node process-docs.js           # Process existing documentation
node verify-content.js         # Verify generated content
```

This will:
1. Generate character documentation from JSON data files in `../TCL/src/data/characters/`
2. Generate weapon documentation from JSON data files in `../TCL/src/data/weapons/`
3. Generate artifact documentation from JSON data in `../TCL/src/data/artifacts.json`
4. Process existing markdown documentation from `../TCL/docs/` to remove MDX/React components
5. Create a structured output in the `../outputs/` directory

## Output Structure

```
outputs/
├── index.md                 # Main index with links to all content
├── characters/              # Character stats, talents, constellations
│   ├── character-name.md
│   └── ...
├── weapons/                 # Weapon stats and refinements
│   ├── bow/
│   ├── catalyst/
│   ├── claymore/
│   ├── polearm/
│   └── sword/
├── artifacts/               # Artifact set bonuses
│   ├── artifact-name.md
│   └── ...
├── combat-mechanics/        # Combat system documentation
├── enemy-data/              # Enemy information
├── general-mechanics/       # General game mechanics
├── evidence/                # Evidence vault entries
└── resources/               # Compendiums and tools
```

## Features

- Extracts character data including:
  - Base stats at all ascension levels
  - Talent descriptions and scaling
  - Passive abilities
  - Constellations
  - Frame data (when available)

- Extracts weapon data including:
  - Stats at all levels
  - Refinement effects and values
  - Organized by weapon type

- Extracts artifact set bonuses

- Processes existing documentation by:
  - Removing React/MDX components
  - Converting to plain markdown
  - Preserving content structure

## Notes

- The generated markdown is optimized for readability and parsing by AI systems
- Interactive elements and complex formatting are simplified or removed
- All data is extracted from the same sources used by the website
- The output directory is completely regenerated on each run
- Scripts are configured to work with the TCL submodule structure
- Source data is read from the TCL directory, output is written to the project root outputs directory