const defaultLandingPageProps = {
  navbar: {
    logo: {
      brand: "Build Me",
    },

    links: [
      {
        label: "Home",
        href: "/",
      },
      {
        label: "About",
        href: "/about",
      },
      {
        label: "Services",
        href: "/services",
      },
      {
        label: "Contact",
        href: "/contact",
      },
    ],

    cta: {
      label: "Get Started",
      onClick: () => alert("Get Started clicked"),
    },

    sticky: true,
  },

  hero: {
    content: {
      badge: "TECHNOLOGY OWNERSHIP",

      title: "Build Better",

      subtitle: "Digital Experiences",

      description:
        "Websites and apps that are easy to use, look great, and work fast. Get more customers with ease. No stress, no confusion — just simple, reliable solutions that help you grow.",

      primaryAction: {
        label: "Get Started",
        onClick: () => alert("Get Started clicked"),
      },

      secondaryAction: {
        label: "Learn More",
        onClick: () => alert("Learn More clicked"),
      },
    },

    image: {
      avatar: {
        src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=900&q=85",
        alt: "Technology Owner",
      },

      showDecoration: true,
    },

    metrics: [
      {
        icon: "shield" as const,
        title: "99.9%",
        description: "System Reliability",
      },

      {
        icon: "rocket" as const,
        title: "Faster",
        description: "Time to Market",
      },

      {
        icon: "trending-down" as const,
        title: "Lower",
        description: "Operational Costs",
      },

      {
        icon: "shield" as const,
        title: "Stronger",
        description: "Security & Trust",
        variant: "highlight" as const,
      },
    ],
  },

  footer: {
    socialLinks: [
      {
        platform: "linkedin" as const,
        href: "https://linkedin.com",
      },
      {
        platform: "x" as const,
        href: "https://x.com",
      },
      {
        platform: "facebook" as const,
        href: "https://facebook.com",
      },
      {
        platform: "instagram" as const,
        href: "https://instagram.com",
      },
      {
        platform: "youtube" as const,
        href: "https://youtube.com",
      },
    ],

    copyright: "© 2026 Build Me. All rights reserved.",
  },
};
