# BluePrintNZ: Astro on Netlify Platform Starter

[Live Demo](https://blueprintnz.netlify.app/)

## Project Structure

Below is a comprehensive list of files in the `src` directory with descriptions:

### Assets

- `/src/assets/icons/` - SVG icons used throughout the site
- `/src/assets/images/` - Image assets including logos and placeholders
- `/src/assets/svg/icons.svg` - SVG sprite sheet for optimized icon loading

### Components

- `/src/components/Diff.astro` - Component for displaying code differences
- `/src/components/Markdown.astro` - Markdown rendering component
- `/src/components/OptimizedImage.astro` - Image optimization wrapper

#### About Components

- `/src/components/about/ImageComparison.astro` - Before/after image comparison tool
- `/src/components/about/MainContent.astro` - Main content for about page

#### Common Components

- `/src/components/common/` - Reusable UI components like alerts, chat boxes, and context notifications

#### Footer Components

- `/src/components/footer/FooterSection.astro` - Footer section layout component
- `/src/components/footer/NewsletterForm.astro` - Newsletter subscription form
- `/src/components/footer/SocialLinks.astro` - Social media links component

#### Home Page Components

- `/src/components/home/HeroSection.astro` - Hero banner for homepage
- `/src/components/home/FoundationSection.astro` - Foundation information section
- `/src/components/home/InfoSection.astro` - Information display section
- `/src/components/home/ServicesSection.astro` - Services showcase section

#### Icon Components

- `/src/components/icons/Icon.astro` - Icon component wrapper
- `/src/components/icons/IconLibrary.ts` - Icon definitions and mappings
- `/src/components/icons/Icons.astro` - Icon collection component
- `/src/components/icons/BlueprintIcon.astro` - Blueprint-specific icon component

#### Layout Components

- `/src/components/layout/Header.astro` - Site header with navigation
- `/src/components/layout/Footer.astro` - Site footer with sections and links

#### Navigation Components

- `/src/components/navigation/MainNav.astro` - Main navigation menu
- `/src/components/navigation/NavItem.astro` - Navigation item component
- `/src/components/navigation/SearchBar.astro` - Search functionality
- `/src/components/navigation/SearchButton.astro` - Search trigger button

#### Shared Components

- `/src/components/shared/` - Shared UI elements like logos, tooltips, and theme toggles

#### UI Components

- `/src/components/ui/` - Core UI components (buttons, cards, containers, etc.)

### Data

- `/src/data/about.ts` - About page content data
- `/src/data/bluenode.ts` - Bluenode feature data
- `/src/data/home.ts` - Homepage content data
- `/src/data/navigation.ts` - Navigation structure and items
- `/src/data/site.ts` - Global site configuration

### Layouts

- `/src/layouts/BaseLayout.astro` - Base layout template
- `/src/layouts/FullPageLayout.astro` - Full page layout template
- `/src/layouts/Layout.astro` - Standard page layout

### Library

- `/src/lib/theme/` - Theme configuration and utilities
- `/src/lib/types/` - TypeScript type definitions
- `/src/lib/utils/` - Utility functions for helpers, highlighting, and Netlify integration

### Pages

- `/src/pages/index.astro` - Homepage
- `/src/pages/about.astro` - About page
- `/src/pages/design-system.astro` - Design system documentation
- `/src/pages/blueprint-svg.astro` - SVG blueprint generator
- `/src/pages/newsletter.astro` - Newsletter subscription page

#### API Endpoints

- `/src/pages/api/` - API endpoints for blob storage, newsletter, and revalidation

#### Feature Pages

- `/src/pages/blobs/` - Blob storage demonstration
- `/src/pages/bluenode/` - Bluenode visualization feature
- `/src/pages/get-involved/` - Community involvement page
- `/src/pages/help/` - Help and support page
- `/src/pages/information-and-support/` - Information resources
- `/src/pages/news/` - News and updates
- `/src/pages/research/` - Research information
- `/src/pages/settings/` - User settings page
- `/src/pages/shop/` - E-commerce section

### Styles

- `/src/styles/globals.css` - Global CSS styles
- `/src/styles/chat-box.css` - Chat interface styling
- `/src/styles/images.ts` - Image size configurations
- `/src/styles/spacing.ts` - Spacing system definitions
- `/src/styles/theme.ts` - Theme configuration

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

To modify the color palette, edit the `palette` object in `/src/styles/colors.ts`.

## Project Structure Diagram

Below is a diagram showing the main dependencies between key files in the src directory:

```
                                  +----------------+
                                  |                |
                                  |   index.astro  |
                                  |   (Homepage)   |
                                  |                |
                                  +-------+--------+
                                          |
                                          | uses
                                          v
                +------------------------+----------------------------+
                |                        |                            |
    +-----------v-----------+  +---------v----------+    +-----------v-----------+
    |                       |  |                    |    |                       |
    |    Layout.astro       |  |  home/             |    |  navigation/          |
    |    (Main Layout)      |  |  HeroSection.astro |    |  MainNav.astro        |
    |                       |  |  InfoSection.astro |    |                       |
    +-----------+-----------+  |  ServicesSection   |    +-----------+-----------+
                |              |                    |                |
                |              +--------------------+                |
                v                                                    v
    +-----------+-----------+                            +-----------+-----------+
    |                       |                            |                       |
    |  layout/              |                            |  navigation/          |
    |  Header.astro         +<---------------------------+  NavItem.astro        |
    |  Footer.astro         |                            |  SearchBar.astro      |
    |                       |                            |  SearchButton.astro   |
    +-----------+-----------+                            +-----------+-----------+
                |                                                    |
                v                                                    |
    +-----------+-----------+                                        |
    |                       |                                        |
    |  footer/              |                                        |
    |  FooterSection.astro  |                                        |
    |  NewsletterForm.astro |                                        |
    |  SocialLinks.astro    |                                        |
    |                       |                                        |
    +-----------+-----------+                                        |
                                                                     v
    +-----------+-----------+                            +-----------+-----------+
    |                       |                            |                       |
    |  data/                +<---------------------------+  icons/               |
    |  navigation.ts        |                            |  Icon.astro           |
    |  site.ts              |                            |  IconLibrary.ts       |
    |  home.ts              |                            |                       |
    |                       |                            +-----------------------+
    +-----------+-----------+
                |
                v
    +-----------+-----------+
    |                       |
    |  styles/              |
    |  globals.css          |
    |  images.ts            |
    |  spacing.ts           |
    |  theme.ts             |
    |                       |
    +-----------------------+
```

This diagram shows the primary dependencies between key components. The main flow starts from the index.astro (homepage) which uses the Layout.astro component. The Layout component incorporates Header and Footer components, which in turn use navigation components and footer components respectively. Most components rely on data files for content and configuration, and many use the Icon system for visual elements.

## Detailed Component Dependencies

Below is a more detailed breakdown of component dependencies:
```
+---------------------+     +---------------------+     +---------------------+
| Pages               |     | Layouts             |     | Components          |
+---------------------+     +---------------------+     +---------------------+
| index.astro         +---->| Layout.astro        +---->| Header.astro        |
| about.astro         |     | BaseLayout.astro    |     | Footer.astro        |
| design-system.astro |     | FullPageLayout.astro|     | MainNav.astro       |
| blueprint-svg.astro |     |                     |     | NavItem.astro       |
| newsletter.astro    |     |                     |     | HeroSection.astro   |
+---------------------+     +---------------------+     | ServicesSection.astro|
                                                        | InfoSection.astro    |
                                                        +---------------------+
                                                                 |
                                                                 v
+---------------------+     +---------------------+     +---------------------+
| Data                |     | Styles              |     | UI Components       |
+---------------------+     +---------------------+     +---------------------+
| navigation.ts       |<----+ globals.css         |<----+ Button.astro        |
| site.ts             |     | images.ts           |     | Card.astro          |
| home.ts             |     | spacing.ts          |     | Container.astro     |
| about.ts            |     | theme.ts            |     | Section.astro       |
| bluenode.ts         |     |                     |     | Breadcrumbs.astro   |
+---------------------+     +---------------------+     +---------------------+
        ^                            ^                           ^
        |                            |                           |
        |                            |                           |
+---------------------+     +---------------------+     +---------------------+
| Icons               |     | Shared              |     | Utils               |
+---------------------+     +---------------------+     +---------------------+
| Icon.astro          |<----+ Logo.astro          |<----+ helpers.ts          |
| IconLibrary.ts      |     | ThemeToggle.astro   |     | highlighter.ts      |
| BlueprintIcon.astro |     | MobileNavTooltip    |     | netlify.ts          |
| Icons.astro         |     | PixelRibbon.astro   |     |                     |
+---------------------+     +---------------------+     +---------------------+
```

### Key Dependency Flows

1. **Page Rendering Flow**:
   - Pages (index.astro) → Layout.astro → Header/Footer → Navigation Components → Icons

2. **Data Flow**:
   - Data files (navigation.ts, site.ts) → Layout Components → UI Components

3. **Styling Flow**:
   - Styles (globals.css, theme.ts) → Applied throughout all components

4. **Component Composition**:
   - UI Components (Button.astro, Card.astro) → Used in Section Components → Used in Page Components

This structure follows a modular architecture where components are organized by function and reused throughout the application. The data files provide centralized configuration that flows into the components, while utility functions support operations across the application.
