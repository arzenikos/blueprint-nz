# BluePrintNZ: Astro on Netlify Platform Starter

[Live Demo](https://blueprintnz.netlify.app/)

## Project Structure

Below is the directory structure of the project:

```
📁astro-blueprint-nz
    └── 📁public
    └── 📁src
        ├──📁assets  # Project Assets
        │   ├── 📁icons       # Icons (.svg)
        │   ├── 📁images      # Image assets
        ├──📁components  # Reusable UI components
        │   ├── 📁common    # Common components
        │   │   ├── 📁chatbox    # Chat interface components
        │   │   └── 📁navigation # Navigation components
        │   ├── 📁layout  # Layout components
        │   │   ├── 📁header    # Header components
        │   │   └── 📁footer    # Footer components
        │   └── 📁ui      # UI components
        │   │   ├── 📁icon    # Icon components
        │   │   └── 📁button  # Button components
        ├──📁content     # All the hardcoded texts for pages
        ├──📁layouts     # Site layouts
        │   ├── Layout.astro           # Main application layout
        │   ├── BaseLayout.astro       # Base layout template
        │   ├── MarkdownAbout.astro    # About-me page layout
        │   ├── MarkdownPostLayout.astro # Posts page layout
        │   └── ProjectLayout.astro    # Projects page layout
        ├── 📁pages       # Site pages
        │   ├── index.astro            # Home page
        │   ├── about.astro            # About page
        │   ├── services.astro         # Services page
        │   ├── features.astro         # Features page
        │   └── 📁bluenode             # BlueNode feature pages
        ├── 📁scripts      # JavaScript files
        │   ├── chatbox.js             # Chat functionality
        │   ├── bluenode.js            # BlueNode visualization
        │   ├── theme.js               # Theme management
        │   └── menu.js                # Menu script
        ├──📁styles     # Styling
        │   └── global.css             # Global styles
        ├──📁lib     # Utility libraries
            ├── 📁utils             # Utility functions
            │   └── languages.ts           
            ├── 📁themes-and-layout  # Theme and layout configuration
            │   ├── spacing.ts       # Spacing system
            │   ├── color.ts         # Color system
            │   ├── image.ts         # Image sizing
            │   └── theme.ts         # Theme configuration
            └── 📁types            # TypeScript type definitions
    ├── .gitignore
    ├── astro.config.mjs
    ├── package-lock.json
    ├── package.json
    ├── README.md
    └── tsconfig.json
```

## Directory Descriptions

### `/public`
Contains static assets that are copied directly to the build output without processing. This includes favicons, robots.txt, and other static files.

### `/src/assets`
Project assets used throughout the site:
- **`/icons`**: SVG icon files used for UI elements
- **`/images`**: Image assets including logos, backgrounds, and content images

### `/src/components`
Reusable UI components organized by function:

- **`/common`**: Shared components used across multiple pages
  - **`/chatbox`**: Interactive chat interface components
  - **`/navigation`**: Navigation components including main nav and nav items

- **`/layout`**: Layout-specific components
  - **`/header`**: Header components including logo and navigation
  - **`/footer`**: Footer components including sections, newsletter form, and social links

- **`/ui`**: Core UI components
  - **`/icon`**: Icon system components
  - **`/button`**: Button components with different variants

### `/src/content`
Content data files that provide text and configuration for pages:
- Content is separated from presentation to make updates easier
- Includes navigation structure, site metadata, and page-specific content
- Centralizes all hardcoded text in one location

### `/src/layouts`
Page layout templates that define the structure of different page types:
- **`Layout.astro`**: Main application layout (wrapper for backward compatibility)
- **`BaseLayout.astro`**: Base layout template with header and footer
- **`MarkdownAbout.astro`**: Layout for about page content
- **`MarkdownPostLayout.astro`**: Layout for blog posts
- **`ProjectLayout.astro`**: Layout for project pages

### `/src/pages`
Astro pages that represent the routes of the site:
- **`index.astro`**: Homepage
- **`about.astro`**: About page
- **`services.astro`**: Services page
- **`features.astro`**: Features showcase page
- **`/bluenode`**: BlueNode interactive visualization feature

### `/src/scripts`
JavaScript files for interactive functionality:
- **`chatbox.js`**: Chat interface functionality
- **`bluenode.js`**: Interactive node graph visualization
- **`theme.js`**: Theme management (light/dark mode)
- **`menu.js`**: Mobile menu functionality

### `/src/styles`
CSS styling for the site:
- **`global.css`**: Global CSS styles and utility classes

### `/src/lib`
Utility libraries and configuration:
- **`/utils`**: Utility functions for common operations
- **`/themes-and-layout`**: Configuration for theming and layout
  - **`spacing.ts`**: Spacing system definitions
  - **`color.ts`**: Color system definitions
  - **`image.ts`**: Image size configurations
  - **`theme.ts`**: Theme configuration
- **`/types`**: TypeScript type definitions

## Key Features

### Content-Driven Architecture
- All content is stored in the `/src/content` directory
- Components consume content data rather than hardcoding text
- Makes the site easier to maintain and update

### Theme System
- Supports light and dark mode with smooth transitions
- Theme configuration centralized in `/src/lib/themes-and-layout`
- Consistent color application throughout the site

### Interactive Features
- **BlueNode**: Interactive knowledge graph visualization
- **ChatBox**: Interactive chat support interface
- Both features are fully integrated with the theme system

### Responsive Design
- Mobile-first approach with responsive breakpoints
- Consistent spacing and layout across all screen sizes
- Optimized navigation for different devices

## Astro Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## Deploying to Netlify

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/netlify-templates/astro-platform-starter)

## Developing Locally

| Prerequisites                                                                |
| :--------------------------------------------------------------------------- |
| [Node.js](https://nodejs.org/) v18.14+.                                      |
| (optional) [nvm](https://github.com/nvm-sh/nvm) for Node version management. |

1. Clone this repository, then run `npm install` in its root directory.

2. For the starter to have full functionality locally (e.g. edge functions, blob store), please ensure you have an up-to-date version of Netlify CLI. Run:
```npm install netlify-cli@latest -g```

3. Link your local repository to the deployed Netlify site. This will ensure you're using the same runtime version for both local development and your deployed site.
```netlify link```

4. Then, run the Astro.js development server via Netlify CLI:
```netlify dev```

If your browser doesn't navigate to the site automatically, visit [localhost:8888](http://localhost:4321).

## Color System

The site uses a centralized 5-color palette system:

1. **Primary** (`#b9d6f2`) - Main brand color (light blue)
2. **Secondary** (`#000f2e`) - Secondary brand color (dark blue)
3. **Accent** (`#3b82f6`) - Accent color for highlights and CTAs
4. **Neutral** (`#ffffff`) - For backgrounds, text, and borders
5. **Semantic** (`#10b981`) - Base for feedback states

To modify the color palette, edit the `palette` object in `/src/lib/themes-and-layout/color.ts`.

## Component Architecture

The project follows a modular component architecture with clear separation of concerns:

1. **Content/Data Layer**: Content files in `/src/content` provide the text and configuration
2. **Presentation Layer**: Components in `/src/components` define how content is displayed
3. **Layout Layer**: Layouts in `/src/layouts` define the page structure
4. **Style Layer**: Styles in `/src/styles` and theme configuration in `/src/lib/themes-and-layout`
5. **Interaction Layer**: JavaScript in `/src/scripts` provides interactive functionality

This architecture makes the site easy to maintain and extend with new features.
