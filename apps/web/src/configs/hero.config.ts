import type { ComponentProps } from "react";
import { LandingPage } from "@build-me/ui";

export type HeroProps = NonNullable<ComponentProps<typeof LandingPage>["hero"]>;

export const heroConfig: Record<string, any> = {
  badge: "TECHNOLOGY OWNERSHIP",
  title: "Build Better",
  subtitle: "Digital Experiences",
  description:
    "Simple, fast, and beautiful platforms that win and get real results. Websites and apps that are easy to use, look great, and work fast. Get more customers with ease. No stress, no confusion — just simple, reliable solutions that help you grow.",
  primaryAction: {
    label: "Get Started",
    onClick: () => alert("Get Started clicked"),
  },
  secondaryAction: {
    label: "Learn More",
    onClick: () => alert("Learn More clicked"),
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
      icon: "shield",
      title: "99.9%",
      description: "System Reliability",
    },
    { icon: "rocket", title: "Faster", description: "Time to Market" },
    {
      icon: "trending-down",
      title: "Lower",
      description: "Operational Costs",
    },
    {
      icon: "shield",
      title: "Stronger",
      description: "Security & Trust",
      variant: "highlight",
    },
  ],
};
