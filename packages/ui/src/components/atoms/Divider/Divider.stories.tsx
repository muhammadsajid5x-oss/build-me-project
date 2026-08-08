import type { Meta, StoryObj } from '@storybook/react';
import { Divider } from './Divider';
const meta: Meta<typeof Divider> = {
  title: 'Components/Divider',
  component: Divider,
  tags: ['autodocs'],
  argTypes: {
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
    },
    thickness: {
      control: 'select',
      options: ['thin', 'medium'],
    },
    color: {
      control: 'select',
      options: ['default', 'light', 'dark'],
    },
    spacing: {
      control: 'select',
      options: ['none', 'sm', 'md', 'lg'],
    },
  },
};
export default meta;
type Story = StoryObj<typeof Divider>;
export const Horizontal: Story = {
  args: { orientation: 'horizontal' },
};
export const Vertical: Story = {
  render: () => (
    <div className="flex h-12 items-center space-x-4 text-slate-300">
      <span>Item 1</span>
      <Divider orientation="vertical" />
      <span>Item 2</span>
      <Divider orientation="vertical" thickness="medium" />
      <span>Item 3</span>
    </div>
  ),
};
export const Thin: Story = {
  args: { thickness: 'thin' },
};
export const Medium: Story = {
  args: { thickness: 'medium' },
};
export const Light: Story = {
  args: { color: 'light' },
};
export const Dark: Story = {
  args: { color: 'dark' },
};