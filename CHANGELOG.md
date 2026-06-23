# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
- Native installation of Tailwind CSS with `postcss` and `autoprefixer`.
- Tailwind design tokens configured in `tailwind.config.js`.
- Custom CSS animations (`aurora`, `bounce`, `fade-in-up`) in `global.scss`.
- `glass-panel` custom CSS utility class for depth effects.
- New Google Fonts (`Great Vibes`, `Inter`, `Playfair Display`) and Material Symbols links in `index.html`.
- `CHANGELOG.md` and `IMPROVEMENTS.md` for proper documentation of frontend upgrades.

### Changed
- Replaced the primary HTML structure of `inicio.page.html` with a modernized UI featuring a Glassmorphism design and Aurora backgrounds.
- Updated `global.scss` to import Tailwind base, components, and utilities, replacing the previous legacy custom styles.
- Integrated `tailwindcss/forms` and `tailwindcss/container-queries` plugins.
