import type { Meta, StoryObj } from "@storybook/react";
import { HeroImage } from "./HeroImage";
const meta: Meta<typeof HeroImage> = {
  title: "Organisms/HeroImage",
  component: HeroImage,
  tags: ["autodocs"],
  argTypes: {
    showDecoration: { control: "boolean" },
  },
};
export default meta;
type Story = StoryObj<typeof HeroImage>;
export const Default: Story = {
  args: {
    avatar: {
      src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=500",
      alt: "Technology Owner",
    },
    showDecoration: true,
  },
};
export const WithoutDecoration: Story = {
  args: {
    avatar: {
      src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=500",
      alt: "Technology Owner",
    },
    showDecoration: false,
  },
};
export const CustomAvatar: Story = {
  args: {
    avatar: {
      src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=500",
      alt: "Lead Architect",
    },
    showDecoration: true,
  },
};
