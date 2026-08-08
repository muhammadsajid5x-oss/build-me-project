import type { Meta, StoryObj } from "@storybook/react";
import { QuickActionCard } from "./QuickActionCard";
const meta: Meta<typeof QuickActionCard> = {
  title: "Molecules/QuickActionCard",
  component: QuickActionCard,
  tags: ["autodocs"],
  argTypes: {
    icon: {
      control: "select",
      options: ["share", "gift", "info", "settings", "external-link"],
    },
    variant: {
      control: "radio",
      options: ["default", "outlined"],
    },
    clickable: {
      control: "boolean",
    },
  },
};
export default meta;
type Story = StoryObj<typeof QuickActionCard>;
export const Share: Story = {
  args: {
    icon: "share",
    title: "Share This Page",
    description: "Help others discover our platform.",
    href: "https://example.com",
  },
};
export const Referral: Story = {
  args: {
    icon: "gift",
    title: "Give Referrals",
    description: "Invite your friends and colleagues.",
    href: "https://example.com",
  },
};
export const About: Story = {
  args: {
    icon: "info",
    title: "About Us",
    description: "Learn more about our mission.",
    href: "https://example.com",
  },
};
export const Default: Story = {
  args: {
    icon: "share",
    title: "Share This Page",
    description: "Help others discover our platform.",
  },
};
export const Hover: Story = {
  args: {
    icon: "share",
    title: "Interactive State",
    description: "Hover over this card to preview effect.",
    href: "https://example.com",
  },
};
export const Disabled: Story = {
  args: {
    icon: "share",
    title: "Disabled Card",
    description: "This card is not interactive.",
    clickable: false,
  },
};
