import type { Meta, StoryObj } from "@storybook/react";
import { LandingPage } from "./LandingPage";

const meta: Meta<typeof LandingPage> = {
  title: "Templates/LandingPage",
  component: LandingPage,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof LandingPage>;

export const Default: Story = {
  args: {
    navbar: {
      logo: { brand: "YourBrand" },
      links: [
        { label: "Home", href: "/" },
        { label: "About", href: "/about" },
        { label: "Services", href: "/services" },
        { label: "Contact", href: "/contact" },
      ],
      cta: {
        label: "Get Started",
        onClick: () => alert("Navbar CTA clicked"),
      },
      sticky: true,
    },
    hero: {
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
          icon: "shield",
          title: "99.9%",
          description: "System Reliability",
        },
        {
          icon: "rocket",
          title: "Faster",
          description: "Time to Market",
        },
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
    },
    footer: {
      socialLinks: [
        { platform: "linkedin", href: "https://linkedin.com" },
        { platform: "x", href: "https://x.com" },
        { platform: "facebook", href: "https://facebook.com" },
        { platform: "instagram", href: "https://instagram.com" },
        { platform: "youtube", href: "https://youtube.com" },
      ],
      quickActions: [
        {
          icon: "share",
          title: "Share This Page",
          description: "Help others discover our platform.",
          href: "https://example.com",
        },
        {
          icon: "gift",
          title: "Give Referrals",
          description: "Invite your friends and colleagues.",
          href: "https://example.com",
        },
        {
          icon: "info",
          title: "About Us",
          description: "Learn more about our mission.",
          href: "https://example.com",
        },
      ],
      copyright: "© 2025 YourBrand. All rights reserved.",
    },
  },
};
