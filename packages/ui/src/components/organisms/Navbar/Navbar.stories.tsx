import type { Meta, StoryObj } from "@storybook/react";
import { Navbar } from "./Navbar";

const meta: Meta<typeof Navbar> = {
  title: "Organisms/Navbar",
  component: Navbar,
  tags: ["autodocs"],
  argTypes: {
    sticky: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof Navbar>;

export const Default: Story = {
  args: {
    logo: { brand: "Build Me" },
    sticky: false,
  },
};

export const Sticky: Story = {
  args: {
    logo: { brand: "Build Me" },
    sticky: true,
  },
};
