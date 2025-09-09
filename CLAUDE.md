# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is an Astro-based website for G Productions (g-productions.studio) built with Astro 5.13, Tailwind CSS v4, and TypeScript. The project uses Bun as the package manager and is configured for static site generation.

## Key Commands

### Development

- `bun run dev` - Start the development server at localhost:3000
- `bun run build` - Build the production site to ./dist/
- `bun run preview` - Preview the built site locally

### Code Quality

- `bun run check` - Run all checks (Astro, ESLint, and Prettier)
- `bun run check:astro` - Run Astro type checking
- `bun run check:eslint` - Run ESLint linting
- `bun run check:prettier` - Check code formatting
- `bun run fix` - Auto-fix ESLint and Prettier issues
- `bun run fix:eslint` - Auto-fix ESLint issues
- `bun run fix:prettier` - Auto-format code with Prettier

### Important: Always run `bun run check` before committing changes to ensure code quality.

## Architecture Overview

### Core Configuration

- **src/config.yaml** - Main site configuration (metadata, SEO, blog settings, analytics)
- **astro.config.ts** - Astro build configuration with integrations
- **src/navigation.js** - Header and footer navigation structure

### Project Structure

- **src/pages/** - Astro pages and routes, supporting nested paths for blog
- **src/components/** - Reusable components organized by:
  - `blog/` - Blog-specific components
  - `common/` - Shared UI elements
  - `ui/` - Base UI components
  - `widgets/` - Page sections (Header, Footer, Hero, Features, etc.)
- **src/layouts/** - Page layouts (Layout, PageLayout, MarkdownLayout)
- **src/content/** - MDX/Markdown content for blog posts
- **src/utils/** - Utility functions for:
  - Blog post processing
  - Image optimization
  - Permalink generation
  - Frontmatter handling
- **src/assets/** - Static assets including images and Tailwind CSS styles
- **vendor/integration/** - Custom Astro integration for loading YAML config

### Key Technologies

- **Astro 5.13** with static output mode
- **Tailwind CSS v4** using Vite plugin
- **TypeScript** with strict mode enabled
- **MDX** for enhanced markdown support
- **Astro Icon** for icon management
- **Unpic** for universal image CDN optimization

### Path Aliases

- `~/*` maps to `src/*` for cleaner imports

### Blog Configuration

- Posts use permalink pattern: `/%slug%`
- Blog listing at `/blog`
- Categories at `/category/[category]`
- Tags at `/tag/[tag]`
- Related posts enabled with 4 posts shown

### Development Patterns

- Components follow Astro's `.astro` format
- TypeScript for type safety in utilities and configurations
- YAML-based configuration for site settings
- Frontmatter plugins for reading time calculation
- Image optimization with Astro's built-in image handling
