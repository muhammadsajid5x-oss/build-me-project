import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from './Badge';

const meta: Meta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Primary: Story = {
  args: {
    text: 'Primary Badge',
    variant: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    text: 'Secondary Badge',
    variant: 'secondary',
  },
};

export const LongText: Story = {
  args: {
    text: 'This is a significantly longer badge text to check wrapping and styling',
    variant: 'primary',
  },
};

export const Custom: Story = {
  args: {
    text: 'Custom Styled Badge',
    variant: 'secondary',
    className: 'border-2 border-dashed border-indigo-600',
  },
};
