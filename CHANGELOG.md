# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [Phase 3] - 2026-06-22

### Added
- GPU hardware acceleration (`translate3d` transforms) for all keyframe animations.
- Browser layer caching optimizations via `will-change: transform, opacity` to prevent repaint delays and optimize memory.
- Paint isolation (`contain: strict`) on `.aurora-container` to block page-wide reflow storm overheads.

### Changed
- Snappier entry animation delays (reduced offsets from `100ms-500ms` down to `60ms-300ms`) for a more responsive initial paint.
- Optimised aurora blur radii (from `150px` to `100px`) to prevent GPU rasterization performance degradation.
- Overhauled `informacion-personal` styles to introduce chronological timelines, custom skill indicators, and spaced card layouts.

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

### Fixed
- Downgraded `tailwindcss` from v4 to v3 to resolve Vercel build error (`@tailwindcss/postcss` incompatibility).

## [Phase 2] - 2026-06-22

### Added
- `glass-card` reusable CSS utility class for dark glassmorphism cards across all pages.
- Gold accent badges (`entry-badge`) for education status indicators.
- Gold accent skill chips with hover glow effects.
- Aurelian Gold icon accents on contact page buttons and footer.
- Entrance animations (`animate-fade-in-up` with staggered delays) on all three pages.

### Changed
- **Navigation:** Removed duplicate custom bottom nav from `inicio.page.html`. The Ionic `ion-tab-bar` is now the single navigation element, restyled with glassmorphism backdrop-blur, Aurelian Gold active state, and muted outline for inactive tabs.
- **Headers:** All `ion-toolbar` headers now use a unified glass effect: semi-transparent background with `backdrop-filter: blur(16px)` and ghost border.
- **Theme Variables:** Completely rewrote `theme/variables.scss` with Aurelian Tech color tokens (Oxford Navy backgrounds, Aurelian Gold accents, Cool Slate surfaces).
- **Global Styles:** Rewrote `global.scss` with unified dark mode, consistent toolbar styling, glass-card utility, and aurora animations.
- **Inicio Page:** Restructured to use native `ion-header` instead of custom fixed HTML header. Aurora background, hero section, and expertise grid all use the Aurelian palette.
- **Información Personal Page:** Converted white opaque cards to dark `glass-card` containers. Skill chips now use gold tint background and gold text. Avatar border uses gold accent.
- **Contacto Page:** Converted white pill buttons to dark glassmorphism buttons with gold icon accents. Footer icons use gold color.
