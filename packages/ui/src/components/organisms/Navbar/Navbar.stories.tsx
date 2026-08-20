import type { Meta, StoryObj } from "@storybook/react";
import { Navbar } from "./Navbar";

const meta: Meta<typeof Navbar> = {
  title: "Organisms/Navbar",
  component: Navbar,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Navbar>;

export const Default: Story = {
  args: {
    logo: {
      brand: "Build Me",
    },
  },
};

export const CustomBrand: Story = {
  args: {
    logo: {
      brand: "Cup&Commit",
    },
  },
};
