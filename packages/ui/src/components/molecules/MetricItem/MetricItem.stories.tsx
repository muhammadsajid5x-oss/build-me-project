import type { Meta, StoryObj } from "@storybook/react";
import { MetricItem } from "./MetricItem";
const meta: Meta<typeof MetricItem> = {
  title: "Molecules/MetricItem",
  component: MetricItem,
  tags: ["autodocs"],
  argTypes: {
    icon: {
      control: "select",
      options: ["shield", "rocket", "trending-down", "lock", "check", "star"],
    },
    variant: {
      control: "radio",
      options: ["default", "highlight"],
    },
  },
};
export default meta;
type Story = StoryObj<typeof MetricItem>;
export const Reliability: Story = {
  args: {
    icon: "shield",
    title: "99.9%",
    description: "System Reliability",
    variant: "default",
  },
};
export const Performance: Story = {
  args: {
    icon: "rocket",
    title: "Faster",
    description: "Time to Market",
    variant: "default",
  },
};
export const Cost: Story = {
  args: {
    icon: "trending-down",
    title: "Lower",
    description: "Operational Costs",
    variant: "default",
  },
};
export const Security: Story = {
  args: {
    icon: "lock",
    title: "Stronger",
    description: "Security & Trust",
    variant: "default",
  },
};
export const Highlight: Story = {
  args: {
    icon: "shield",
    title: "99.9%",
    description: "System Reliability",
    variant: "highlight",
  },
};
