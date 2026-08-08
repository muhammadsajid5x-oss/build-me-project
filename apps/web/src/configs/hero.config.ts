export const heroConfig = {
  content: {
    badge: "Technology Ownership",
    title: "Engineering Excellence Through",
    subtitle: "AI & Automation",
    description:
      "Helping organizations build high-performing engineering teams using modern software practices.",
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
      src: "/Sajid.png",
      alt: "Muhammad Sajid",
    },
    showDecoration: true,
  },
  metrics: [
    {
      icon: "shield" as const,
      title: "99.9%",
      description: "System Reliability",
    },
    { icon: "rocket" as const, title: "Faster", description: "Time to Market" },
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
};
