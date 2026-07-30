import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "./Card";

const meta: Meta<typeof Card> = {
  title: "Components/Card",
  component: Card,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    title: "Project Lead Overview",
    children: (
      <p className="text-slate-600">
        Review prospective client details and manage status updates securely.
      </p>
    ),
  },
};
