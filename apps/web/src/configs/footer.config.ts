export const footerConfig = {
  socialLinks: [
    { platform: "linkedin" as const, href: "https://linkedin.com" },
    { platform: "x" as const, href: "https://x.com" },
    { platform: "facebook" as const, href: "https://facebook.com" },
    { platform: "instagram" as const, href: "https://instagram.com" },
    { platform: "youtube" as const, href: "https://youtube.com" },
  ],
  quickActions: [
    {
      icon: "share" as const,
      title: "Share This Page",
      description: "Help others discover our platform.",
      href: "https://example.com",
    },
    {
      icon: "gift" as const,
      title: "Give Referrals",
      description: "Invite your friends and colleagues.",
      href: "https://example.com",
    },
    {
      icon: "info" as const,
      title: "About Us",
      description: "Learn more about our mission.",
      href: "https://example.com",
    },
  ],
  copyright: "© 2025 YourBrand. All rights reserved.",
};
