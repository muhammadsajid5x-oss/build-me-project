import type { Meta, StoryObj } from '@storybook/react';
import { Logo } from './Logo';

const meta: Meta<typeof Logo> = {
  title: 'Components/Logo',
  component: Logo,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Logo>;

export const Default: Story = {
  args: {
    brand: 'YourBrand',
    showText: true,
    size: 'md',
  },
};

export const IconOnly: Story = {
  args: {
    brand: 'YourBrand',
    showText: false,
    size: 'md',
  },
};

export const Small: Story = {
  args: {
    brand: 'YourBrand',
    showText: true,
    size: 'sm',
  },
};

export const Medium: Story = {
  args: {
    brand: 'YourBrand',
    showText: true,
    size: 'md',
  },
};

export const Large: Story = {
  args: {
    brand: 'YourBrand',
    showText: true,
    size: 'lg',
  },
};
