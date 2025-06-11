// Theme management script
document.addEventListener('DOMContentLoaded', () => {
  console.log('Theme script loaded');
  
  // Check for saved theme preference or use OS preference
  const getThemePreference = () => {
    if (typeof localStorage !== 'undefined' && localStorage.getItem('theme')) {
      return localStorage.getItem('theme');
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  };
  
  // Apply theme to icons and other elements that might need special handling
  const updateIconsForTheme = (theme) => {
    console.log('Updating icons for theme:', theme);
    
    // Update icon colors based on theme
    const accentIcons = document.querySelectorAll('.icon-accent');
    const lightIcons = document.querySelectorAll('.icon-light');
    
    // You can add specific icon handling here if needed
    
    // Update any other theme-specific elements
    const themeSpecificElements = document.querySelectorAll('[data-theme-toggle]');
    themeSpecificElements.forEach(element => {
      const lightClass = element.dataset.lightClass;
      const darkClass = element.dataset.darkClass;
      
      if (theme === 'dark') {
        if (lightClass) element.classList.remove(lightClass);
        if (darkClass) element.classList.add(darkClass);
      } else {
        if (darkClass) element.classList.remove(darkClass);
        if (lightClass) element.classList.add(lightClass);
      }
    });
  };
  
  // Initialize theme
  const currentTheme = getThemePreference();
  updateIconsForTheme(currentTheme);
  
  // Listen for theme changes
  document.addEventListener('themeChanged', (e) => {
    updateIconsForTheme(e.detail.theme);
  });
  
  // Listen for OS theme changes
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!localStorage.getItem('theme')) {
      const newTheme = e.matches ? 'dark' : 'light';
      document.documentElement.classList.toggle('dark', e.matches);
      updateIconsForTheme(newTheme);
    }
  });
});
