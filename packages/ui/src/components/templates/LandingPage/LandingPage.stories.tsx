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

export const Default: Story = {};

export const CustomClassName: Story = {
  args: {
    className: "custom-landing-page",
  },
};
