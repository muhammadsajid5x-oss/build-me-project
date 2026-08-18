import type { Meta, StoryObj } from "@storybook/react";
import { HeroContent } from "./HeroContent";

const meta: Meta<typeof HeroContent> = {
  title: "Organisms/HeroContent",
  component: HeroContent,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof HeroContent>;

export const Default: Story = {};

export const CustomClassName: Story = {
  args: {
    className: "custom-hero-content",
  },
};
