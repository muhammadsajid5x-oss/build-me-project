import type { Meta, StoryObj } from "@storybook/react";
import { ImpactCard } from "./ImpactCard";
const defaultMetrics = [
  {
    icon: "shield" as const,
    title: "99.9%",
    description: "System Reliability",
    variant: "default" as const,
  },
  {
    icon: "rocket" as const,
    title: "Faster",
    description: "Time to Market",
    variant: "default" as const,
  },
  {
    icon: "trending-down" as const,
    title: "Lower",
    description: "Operational Costs",
    variant: "default" as const,
  },
  {
    icon: "shield" as const,
    title: "Stronger",
    description: "Security & Trust",
    variant: "highlight" as const,
  },
];
const meta: Meta<typeof ImpactCard> = {
  title: "Organisms/ImpactCard",
  component: ImpactCard,
  tags: ["autodocs"],
  argTypes: {
    metrics: {
      control: "object",
    },
  },
};
export default meta;
type Story = StoryObj<typeof ImpactCard>;
export const Default: Story = {
  args: {
    metrics: defaultMetrics,
  },
};
export const FourMetrics: Story = {
  args: {
    metrics: defaultMetrics,
  },
};
export const CustomMetrics: Story = {
  args: {
    metrics: [
      {
        icon: "star" as const,
        title: "5.0",
        description: "Customer Satisfaction",
      },
      {
        icon: "check" as const,
        title: "100%",
        description: "Task Completion Rate",
      },
    ],
  },
};
export const EmptyState: Story = {
  args: {
    metrics: [],
  },
};
