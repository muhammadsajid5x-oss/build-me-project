import type { Meta, StoryObj } from "@storybook/react";
import { HeroContent } from "./HeroContent";
const defaultHeroData = {
  badge: "Technology Ownership",
  title: "Engineering Excellence Through",
  subtitle: "AI & Automation",
  description: "Helping organizations build high-performing engineering teams using modern software practices.",
  primaryAction: {
    label: "Get Started",
    onClick: () => alert("Get Started clicked"),
  },
  secondaryAction: {
    label: "Learn More",
    onClick: () => alert("Learn More clicked"),
  },
};
const meta: Meta<typeof HeroContent> = {
  title: "Organisms/HeroContent",
  component: HeroContent,
  tags: ["autodocs"],
  argTypes: {
    data: { control: "object" },
  },
};
export default meta;
type Story = StoryObj<typeof HeroContent>;
export const Default: Story = {
  args: {
    data: defaultHeroData,
  },
};
export const WithoutSubtitle: Story = {
  args: {
    data: {
      badge: "Engineering Excellence",
      title: "Building the Future of Software",
      description: "Discover modern approaches to full-stack architecture, automation, and scalable deployments.",
      primaryAction: {
        label: "Explore Work",
      },
    },
  },
};
export const SingleButton: Story = {
  args: {
    data: {
      badge: "Exclusive Access",
      title: "Join the Accelerator",
      description: "Take full ownership of your technical stack with guided mentorship and production-grade workflows.",
      primaryAction: {
        label: "Apply Now",
      },
    },
  },
};
