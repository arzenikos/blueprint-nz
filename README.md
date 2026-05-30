# BluePrintNZ: Astro on Netlify Platform Starter

[Live Demo](https://blueprintnz.netlify.app/)

## Module dependency resolution
```bash
rm -rf node_modules
rm -rf package-lock.json
npm install
```


## Project Structure

Below is a comprehensive file structure tree of the `src` directory:

```
src/
├── assets/
│   ├── icons/
│   │   ├── question-dark.svg
│   │   ├── settings-dark.svg
│   │   ├── switch-dark-theme.svg
│   │   └── switch-light-theme.svg
│   ├── images/
│   │   ├── logo-03045e-6985c0.png
│   │   ├── logo-13232A-6DA3C0.png
│   │   ├── logo-b9d6f2-061a40.png
│   │   ├── placeholder-image-1.jpg
│   │   ├── placeholder-image-2.jpg
│   │   ├── placeholder-image-3.jpg
│   │   └── placeholder-image.jpg
│   └── svg/
│       └── icons.svg
├── components/
│   ├── about/
│   │   ├── ImageComparison.astro
│   │   └── MainContent.astro
│   ├── common/
│   │   ├── Alert.astro
│   │   ├── ChatBox.astro
│   │   ├── ContextAlert.astro
│   │   ├── Diff.astro
│   │   ├── EdgeFunctionExplainer.astro
│   │   ├── Logo.astro
│   │   ├── Markdown.astro
│   │   ├── PrometheusAI.astro
│   │   ├── SocialIcon.astro
│   │   └── ThemeToggle.astro
│   ├── footer/
│   │   ├── FooterSection.astro
│   │   ├── NewsletterForm.astro
│   │   └── SocialLinks.astro
│   ├── home/
│   │   ├── FoundationSection.astro
│   │   ├── HeroSection.astro
│   │   ├── InfoSection.astro
│   │   └── ServicesSection.astro
│   ├── icons/
│   │   ├── BlueprintIcon.astro
│   │   ├── Icon.astro
│   │   ├── IconLibrary.ts
│   │   └── Icons.astro
│   ├── layout/
│   │   ├── Footer.astro
│   │   └── Header.astro
│   ├── navigation/
│   │   ├── MainNav.astro
│   │   ├── NavItem.astro
│   │   ├── SearchBar.astro
│   │   └── SearchButton.astro
│   ├── shared/
│   │   ├── Logo.astro
│   │   ├── MobileNavTooltip.astro
│   │   ├── NavIcons.astro
│   │   ├── PixelRibbon.astro
│   │   └── ThemeToggle.astro
│   ├── ui/
│   │   ├── Breadcrumbs.astro
│   │   ├── Button.astro
│   │   ├── Card.astro
│   │   ├── CardGrid.astro
│   │   ├── Carousel.astro
│   │   ├── ColorPalette.astro
│   │   ├── Container.astro
│   │   ├── PixelRibbon.astro
│   │   └── Section.astro
│   ├── Diff.astro
│   ├── Markdown.astro
│   └── OptimizedImage.astro
├── data/
│   ├── about.ts
│   ├── bluenode.ts
│   ├── footer-data.ts
│   ├── home.ts
│   ├── navigation.ts
│   └── site.ts
├── layouts/
│   ├── BaseLayout.astro
│   ├── FullPageLayout.astro
│   └── Layout.astro
├── lib/
│   ├── theme/
│   │   ├── colors.ts
│   │   ├── index.ts
│   │   └── theme-utils.ts
│   ├── types/
│   │   └── index.ts
│   ├── utils/
│   │   ├── helpers.ts
│   │   ├── highlighter.ts
│   │   ├── index.ts
│   │   └── netlify.ts
│   └── index.ts
├── pages/
│   ├── api/
│   │   ├── blobs/
│   │   │   └── [key].ts
│   │   ├── blob.ts
│   │   ├── blobs.ts
│   │   ├── newsletter.ts
│   │   └── revalidate.ts
│   ├── blobs/
│   │   ├── _components/
│   │   │   ├── NewShape.tsx
│   │   │   ├── ShapeEditor.tsx
│   │   │   ├── ShapePreview.tsx
│   │   │   └── StoredShapes.tsx
│   │   └── index.astro
│   ├── bluenode/
│   │   ├── d3-version.astro
│   │   └── index.astro
│   ├── get-involved/
│   │   └── index.astro
│   ├── help/
│   │   └── index.astro
│   ├── information-and-support/
│   │   └── index.astro
│   ├── news/
│   │   └── index.astro
│   ├── research/
│   │   └── index.astro
│   ├── settings/
│   │   └── index.astro
│   ├── shop/
│   │   └── index.astro
│   ├── _blueprint.svg.astro
│   ├── about.astro
│   ├── admin.html
│   ├── blueprint-svg.astro
│   ├── design-system.astro
│   ├── index.astro
│   └── newsletter.astro
└── styles/
    ├── chat-box.css
    ├── globals.css
    ├── images.ts
    ├── spacing.ts
    └── theme.ts
```

Below is a comprehensive list of files in the `src` directory with descriptions:

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

## Color System

The site uses a centralized 5-color palette system:

1. **Primary** (`#b9d6f2`) - Main brand color (light blue)
2. **Secondary** (`#000f2e`) - Secondary brand color (dark blue)
3. **Accent** (`#3b82f6`) - Accent color for highlights and CTAs
4. **Neutral** (`#ffffff`) - For backgrounds, text, and borders
5. **Semantic** (`#10b981`) - Base for feedback states

To modify the color palette, edit the `palette` object in `/src/styles/colors.ts`.

### Key Dependency Flows

1. **Page Rendering Flow**:
   - Pages (index.astro) → Layout.astro → Header/Footer → Navigation Components → Icons
   - Example: `/src/pages/index.astro` imports `Layout.astro`, which imports `Header.astro` and `Footer.astro`
   - `Header.astro` imports `MainNav.astro`, which imports `NavItem.astro`, which uses `Icon.astro`

2. **Data Flow**:
   - Data files (navigation.ts, site.ts) → Layout Components → UI Components
   - Example: `/src/data/navigation.ts` defines navigation structure used by `MainNav.astro`
   - `/src/data/site.ts` provides global configuration used across multiple components

3. **Styling Flow**:
   - Styles (globals.css, theme.ts) → Applied throughout all components
   - Example: `/src/styles/globals.css` provides base styling for the entire application
   - `/src/styles/theme.ts` defines theme variables used by styled components
   - `/src/styles/spacing.ts` provides consistent spacing values used by layout components

4. **Component Composition**:
   - UI Components (Button.astro, Card.astro) → Used in Section Components → Used in Page Components
   - Example: `/src/components/ui/Button.astro` is used in `NewsletterForm.astro` and `HeroSection.astro`
   - `/src/components/ui/Card.astro` is used in `ServicesSection.astro` and feature pages

5. **Feature-Specific Flows**:
   - Feature pages → Feature-specific components → Shared UI components
   - Example: `/src/pages/blobs/index.astro` uses components from `_components/` directory
   - These components may further use shared UI components like `Button.astro` and `Container.astro`

6. **API Integration Flow**:
   - API endpoints → Client-side components → UI feedback
   - Example: `/src/pages/api/newsletter.ts` processes form submissions from `NewsletterForm.astro`
   - Form submission results are displayed using UI components like `Alert.astro`

7. **Theme System Flow**:
   - Theme configuration → Theme utilities → Component styling
   - Example: `/src/lib/theme/colors.ts` defines color palette
   - `/src/lib/theme/theme-utils.ts` provides utilities for applying theme colors
   - Components use these utilities to maintain consistent styling

This structure follows a modular architecture where components are organized by function and reused throughout the application. The data files provide centralized configuration that flows into the components, while utility functions support operations across the application.

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

## Component Usage Map

Below is a detailed mapping of which components are used by other components:

### Layout Components
- **Layout.astro**: Used by most page components (index.astro, about.astro, etc.)
  - Imports: Header.astro, Footer.astro, globals.css
  
- **Header.astro**: Used by Layout.astro
  - Imports: MainNav.astro, Logo.astro
  
- **Footer.astro**: Used by Layout.astro
  - Imports: FooterSection.astro, NewsletterForm.astro, SocialLinks.astro

### UI Components
- **Button.astro**: Used by NewsletterForm.astro, HeroSection.astro, various page components
  - Imports: none (base component)
  
- **Card.astro**: Used by ServicesSection.astro, feature pages
  - Imports: none (base component)
  
- **Carousel.astro**: Used by HeroSection.astro
  - Imports: none (base component)

### Navigation Components
- **MainNav.astro**: Used by Header.astro
  - Imports: NavItem.astro, navigation.ts
  
- **NavItem.astro**: Used by MainNav.astro
  - Imports: Icon.astro, ThemeToggle.astro

### Home Page Components
- **HeroSection.astro**: Used by index.astro
  - Imports: Button.astro, Carousel.astro
  
- **ServicesSection.astro**: Used by index.astro
  - Imports: Card.astro, Icon.astro

### Footer Components
- **FooterSection.astro**: Used by Footer.astro
  - Imports: none
  
- **NewsletterForm.astro**: Used by Footer.astro
  - Imports: Button.astro
  
- **SocialLinks.astro**: Used by Footer.astro
  - Imports: Icon.astro

### Icon System
- **Icon.astro**: Used by NavItem.astro, SocialLinks.astro, various UI components
  - Imports: IconLibrary.ts
  
- **IconLibrary.ts**: Used by Icon.astro
  - Imports: none (data file)

This mapping shows how components are interconnected throughout the application, highlighting the modular architecture and component reuse patterns.
