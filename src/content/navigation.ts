export interface NavItem {
  label: string;
  href: string;
  icon: string;
  mobileOnly?: boolean;
  desktopOnly?: boolean;
  customVisibility?: string;
  isDropdown?: boolean;
  isButtonGroup?: boolean;
  dropdownItems?: {
    label: string;
    value: string;
  }[];
  buttonItems?: {
    label: string;
    value: string;
    ariaLabel: string;
  }[];
}

export const mainNavItems: NavItem[] = [
  {
    label: 'Theme',
    href: '#',
    icon: 'theme',
  },
  {
    label: 'Font Size',
    href: '#',
    icon: 'settings',
    isButtonGroup: true,
    customVisibility: 'hidden md:flex', // Custom visibility class for 769px+ (md breakpoint)
    buttonItems: [
      {
        label: 'A',
        value: 'small',
        ariaLabel: 'Small font size',
      },
      {
        label: 'A',
        value: 'medium',
        ariaLabel: 'Medium font size',
      },
      {
        label: 'A',
        value: 'large',
        ariaLabel: 'Large font size',
      },
    ],
  },
];

export const footerLinks = {
  sections: [
    {
      title: 'About',
      links: [
        { label: 'Our Story', href: '/about' },
        { label: 'Team', href: '/about#team' },
        { label: 'Careers', href: '/about#careers' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { label: 'Documentation', href: '/docs' },
        { label: 'Support', href: '/support' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { label: 'Privacy Policy', href: '/privacy' },
        { label: 'Terms of Service', href: '/terms' },
        { label: 'Cookie Policy', href: '/cookies' },
      ],
    },
    {
      title: 'Contact',
      links: [
        { label: 'Contact Us', href: '/contact' },
        { label: 'Support', href: '/support' },
        { label: 'Feedback', href: '/feedback' },
      ],
    },
  ],
  newsletterSection: {
    title: 'Stay Updated',
    description: 'Subscribe to our newsletter for the latest updates and news.',
    placeholder: 'Enter your email',
    buttonText: 'Subscribe',
  },
  socialLinks: [
    { label: 'Twitter', href: 'https://twitter.com', icon: 'twitter' },
    { label: 'GitHub', href: 'https://github.com', icon: 'github' },
    { label: 'LinkedIn', href: 'https://linkedin.com', icon: 'linkedin' },
  ],
  copyright: '© 2023 BluePrintNZ. All rights reserved.',
};
