import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

// Example UI Button component specification
interface ButtonProps {
  label: string;
  variant?: "primary" | "secondary";
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  label,
  variant = "primary",
  onClick,
}) => {
  const baseStyle =
    "px-4 py-2 rounded-md font-semibold text-sm transition-colors";
  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
  };

  return (
    <button className={`${baseStyle} ${variants[variant]}`} onClick={onClick}>
      {label}
    </button>
  );
};

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["primary", "secondary"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    label: "Get Started",
    variant: "primary",
  },
};

export const Secondary: Story = {
  args: {
    label: "Learn More",
    variant: "secondary",
  },
};
