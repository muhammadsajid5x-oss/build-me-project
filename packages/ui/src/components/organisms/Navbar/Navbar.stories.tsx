import type { Meta, StoryObj } from "@storybook/react";
import { Navbar } from "./Navbar";
const defaultLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];
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
    links: defaultLinks,
    cta: {
      label: "Get Started",
      onClick: () => alert("CTA clicked"),
    },
    sticky: false,
  },
};
export const WithoutCTA: Story = {
  args: {
    logo: { brand: "Build Me" },
    links: defaultLinks,
    sticky: false,
  },
};
export const LongNavigation: Story = {
  args: {
    logo: { brand: "Build Me" },
    links: [
      { label: "Home", href: "/" },
      { label: "Features", href: "/features" },
      { label: "Solutions", href: "/solutions" },
      { label: "Pricing", href: "/pricing" },
      { label: "Blog", href: "/blog" },
      { label: "Contact", href: "/contact" },
    ],
    cta: {
      label: "Sign Up",
      onClick: () => {},
    },
    sticky: false,
  },
};
export const Sticky: Story = {
  args: {
    logo: { brand: "Build Me" },
    links: defaultLinks,
    cta: {
      label: "Get Started",
      onClick: () => {},
    },
    sticky: true,
  },
};
