import type { Meta, StoryObj } from "@storybook/react";
import { SocialIcon } from "./SocialIcon";
const meta: Meta<typeof SocialIcon> = {
  title: "Molecules/SocialIcon",
  component: SocialIcon,
  tags: ["autodocs"],
  argTypes: {
    platform: {
      control: "select",
      options: ["linkedin", "x", "facebook", "instagram", "youtube"],
    },
    size: {
      control: "radio",
      options: ["sm", "md", "lg"],
    },
    target: {
      control: "radio",
      options: ["_self", "_blank"],
    },
  },
};
export default meta;
type Story = StoryObj<typeof SocialIcon>;
export const LinkedIn: Story = {
  args: {
    platform: "linkedin",
    href: "https://linkedin.com",
    size: "md",
  },
};
export const X: Story = {
  args: {
    platform: "x",
    href: "https://x.com",
    size: "md",
  },
};
export const Facebook: Story = {
  args: {
    platform: "facebook",
    href: "https://facebook.com",
    size: "md",
  },
};
export const Instagram: Story = {
  args: {
    platform: "instagram",
    href: "https://instagram.com",
    size: "md",
  },
};
export const YouTube: Story = {
  args: {
    platform: "youtube",
    href: "https://youtube.com",
    size: "md",
  },
};
