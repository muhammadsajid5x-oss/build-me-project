import type { Meta, StoryObj } from "@storybook/react";
import { ImpactCard } from "./ImpactCard";

const defaultMetrics = [
  {
    icon: "shield" as const,
    value: "99.9%",
    label: "System Reliability",
  },
  {
    icon: "rocket" as const,
    value: "Faster",
    label: "Time to Market",
  },
  {
    icon: "dollar" as const,
    value: "Lower",
    label: "Operational Costs",
  },
  {
    icon: "star" as const,
    value: "Stronger",
    label: "Security & Trust",
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
        icon: "star",
        value: "5.0",
        label: "Customer Satisfaction",
      },
      {
        icon: "shield",
        value: "100%",
        label: "Task Completion Rate",
      },
    ],
  },
};

export const EmptyState: Story = {
  args: {
    metrics: [],
  },
};
