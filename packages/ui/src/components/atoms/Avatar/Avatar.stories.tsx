import type { Meta, StoryObj } from "@storybook/react";
import { Avatar } from "./Avatar";

const meta: Meta<typeof Avatar> = {
  title: "Components/Avatar",
  component: Avatar,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg", "xl"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Avatar>;

const DEFAULT_IMAGE =
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80";

export const Default: Story = {
  args: {
    src: DEFAULT_IMAGE,
    alt: "User profile",
  },
};

export const Small: Story = {
  args: {
    src: DEFAULT_IMAGE,
    alt: "Small avatar",
    size: "sm",
  },
};

export const Medium: Story = {
  args: {
    src: DEFAULT_IMAGE,
    alt: "Medium avatar",
    size: "md",
  },
};

export const Large: Story = {
  args: {
    src: DEFAULT_IMAGE,
    alt: "Large avatar",
    size: "lg",
  },
};

export const XL: Story = {
  args: {
    src: DEFAULT_IMAGE,
    alt: "XL avatar",
    size: "xl",
  },
};
