import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'outline', 'ghost'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    disabled: { control: 'boolean' },
    loading: { control: 'boolean' },
    fullWidth: { control: 'boolean' },
  },
};
export default meta;
type Story = StoryObj<typeof Button>;
export const Primary: Story = {
  args: { children: 'Get Started', variant: 'primary' },
};
export const Secondary: Story = {
  args: { children: 'Contact Me', variant: 'secondary' },
};
export const Outline: Story = {
  args: { children: 'Learn More', variant: 'outline' },
};
export const Ghost: Story = {
  args: { children: 'View Projects', variant: 'ghost' },
};
export const Small: Story = { args: { children: 'Small Button', size: 'sm' } };
export const Medium: Story = { args: { children: 'Medium Button', size: 'md' } };
export const Large: Story = { args: { children: 'Large Button', size: 'lg' } };
export const Disabled: Story = {
  args: { children: 'Disabled Button', disabled: true },
};
export const Loading: Story = {
  args: { children: 'Loading...', loading: true },
};
export const WithLeftIcon: Story = {
  args: { children: 'Download CV', leftIcon: 'gift' },
};
export const WithRightIcon: Story = {
  args: { children: 'Explore', rightIcon: 'rocket' },
};
export const FullWidth: Story = {
  args: { children: 'Full Width Button', fullWidth: true },
};