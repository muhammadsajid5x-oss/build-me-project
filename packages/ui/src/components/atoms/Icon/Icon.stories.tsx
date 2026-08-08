import type { Meta, StoryObj } from '@storybook/react';
import { Icon } from './Icon';
import { iconMap, IconName } from './icons';
const meta: Meta<typeof Icon> = {
  title: 'Components/Icon',
  component: Icon,
  tags: ['autodocs'],
  argTypes: {
    name: {
      control: 'select',
      options: Object.keys(iconMap),
    },
    size: { control: 'number' },
    color: { control: 'color' },
  },
};
export default meta;
type Story = StoryObj<typeof Icon>;
export const Default: Story = {
  args: {
    name: 'shield',
    size: 24,
  },
};
export const Shield: Story = { args: { name: 'shield' } };
export const Rocket: Story = { args: { name: 'rocket' } };
export const Dollar: Story = { args: { name: 'dollar' } };
export const Star: Story = { args: { name: 'star' } };
export const Gift: Story = { args: { name: 'gift' } };
export const Share: Story = { args: { name: 'share' } };
export const Info: Story = { args: { name: 'info' } };
export const LinkedIn: Story = { args: { name: 'linkedin' } };
export const XIcon: Story = { args: { name: 'x' } };
export const Facebook: Story = { args: { name: 'facebook' } };
export const Instagram: Story = { args: { name: 'instagram' } };
export const Youtube: Story = { args: { name: 'youtube' } };
export const AllIcons: Story = {
  render: () => (
    <div className="grid grid-cols-4 gap-6 p-6 bg-slate-900 text-white rounded-lg">
      {(Object.keys(iconMap) as IconName[]).map((name) => (
        <div key={name} className="flex flex-col items-center gap-2 p-4 border border-slate-700 rounded-md">
          <Icon name={name} size={32} />
          <span className="text-xs text-slate-400 font-mono">{name}</span>
        </div>
      ))}
    </div>
  ),
};