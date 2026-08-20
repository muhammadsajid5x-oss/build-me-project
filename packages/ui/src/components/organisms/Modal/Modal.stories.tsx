import type { Meta, StoryObj } from '@storybook/react';
import { Modal } from './Modal';
const meta: Meta<typeof Modal> = { title: 'Components/Modal', component: Modal, tags: ['autodocs'] };
export default meta;
export const Default: StoryObj<typeof Modal> = { args: { isOpen: true, title: 'Modal', children: 'Content' } };
