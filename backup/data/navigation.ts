/**
 * Navigation data for the site
 * Centralizes all navigation-related content
 */

export interface NavItem {
  label: string;
  href: string;
  icon: string;
  mobileOnly?: boolean;
  desktopOnly?: boolean;
  isDropdown?: boolean;
  isButtonGroup?: boolean;
  dropdownItems?: {value: string, label: string}[];
  buttonItems?: {value: string, label: string, ariaLabel: string}[];
}

export const mainNavItems: NavItem[] = [
  // {
  //   label: "Home",
  //   href: "/",
  //   icon: "home"
  // },
  // {
  //   label: "About",
  //   href: "/about",
  //   icon: "info"
  // },
  // {
  //   label: "Services",
  //   href: "/services",
  //   icon: "services"
  // },
  {
    label: "Font Size",
    href: "#",
    icon: "text-size",
    isButtonGroup: true,
    buttonItems: [
      { value: "small", label: "A", ariaLabel: "Small Font Size" },
      { value: "medium", label: "A", ariaLabel: "Medium Font Size" },
      { value: "large", label: "A", ariaLabel: "Large Font Size" }
    ]
  },
  {
    label: "Theme",
    href: "#",
    icon: "theme"
  }
];

export const mobileNavItems: NavItem[] = [
  {
    label: "Search",
    href: "#",
    icon: "search",
    mobileOnly: true
  },
  ...mainNavItems
];

export const footerLinks = {
  newsletterSection: {
    title: "Stay Updated",
    description: "Subscribe to our newsletter for the latest updates and resources.",
    placeholder: "Your email address",
    buttonText: "Subscribe"
  },
  sections: [
    {
      title: "Information",
      links: [
        { text: "About Us", url: "/about" },
        { text: "Our Mission", url: "/mission" },
        { text: "Team", url: "/team" },
        { text: "Careers", url: "/careers" }
      ]
    },
    {
      title: "Resources",
      links: [
        { text: "Blog", url: "/blog" },
        { text: "Research", url: "/research" },
        { text: "Publications", url: "/publications" },
        { text: "Media", url: "/media" }
      ]
    },
    {
      title: "Support",
      links: [
        { text: "Contact Us", url: "/contact" },
        { text: "FAQs", url: "/faqs" },
        { text: "Help Center", url: "/help" },
        { text: "Accessibility", url: "/accessibility" }
      ]
    },
    {
      title: "Shop & Services",
      links: [
        { text: "Shop", url: "/shop" },
        { text: "Products", url: "/products" },
        { text: "Resources", url: "/resources" },
        { text: "Services", url: "/services" }
      ]
    }
  ],
  socialLinks: [
    { platform: "facebook", url: "https://facebook.com", ariaLabel: "Follow us on Facebook" },
    { platform: "twitter", url: "https://twitter.com", ariaLabel: "Follow us on Twitter" },
    { platform: "instagram", url: "https://instagram.com", ariaLabel: "Follow us on Instagram" },
    { platform: "linkedin", url: "https://linkedin.com", ariaLabel: "Connect with us on LinkedIn" }
  ],
  copyright: "© 2025 BluePrintNZ. All rights reserved."
};
