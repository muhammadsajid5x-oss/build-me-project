import type { Meta, StoryObj } from "@storybook/react";
import { Footer } from "./Footer";
const defaultSocialLinks = [
  { platform: "linkedin" as const, href: "https://linkedin.com" },
  { platform: "x" as const, href: "https://x.com" },
  { platform: "facebook" as const, href: "https://facebook.com" },
  { platform: "instagram" as const, href: "https://instagram.com" },
  { platform: "youtube" as const, href: "https://youtube.com" },
];
const defaultQuickActions = [
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
];
const meta: Meta<typeof Footer> = {
  title: "Organisms/Footer",
  component: Footer,
  tags: ["autodocs"],
  argTypes: {
    copyright: { control: "text" },
  },
};
export default meta;
type Story = StoryObj<typeof Footer>;
export const Default: Story = {
  args: {
    socialLinks: defaultSocialLinks,
    quickActions: defaultQuickActions,
    copyright: "� 2026 Build Me. All rights reserved.",
  },
};
export const WithoutSocialLinks: Story = {
  args: {
    quickActions: defaultQuickActions,
    copyright: "� 2026 Build Me. All rights reserved.",
  },
};
export const WithoutQuickActions: Story = {
  args: {
    socialLinks: defaultSocialLinks,
    copyright: "� 2026 Build Me. All rights reserved.",
  },
};
export const Minimal: Story = {
  args: {
    copyright: "� 2026 Build Me. All rights reserved.",
  },
};
