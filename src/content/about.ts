// Referenced by: pages/about.astro
export const aboutData = {
  title: "About",
  description: "Learn more about BluePrintNZ and our mission.",
  mainContent: `## Lorem ipsum dolor sit amet, consectetur adipiscing elit.

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
  imageComparison: {
    title: "Original vs. optimized image: can you tell the difference?",
    description: "In the code below, a regular `<img>` tag is used in both cases for a framework-agnostic example. Note that aside from Astro's `Image` or rolling your own `<img>` tags, you can also use the excellent [unpic-img](https://unpic.pics/) package.",
    devModeWarning: "In local development, optimization is performed locally without automatic format detection, so format is set to WebP."
  }
};
