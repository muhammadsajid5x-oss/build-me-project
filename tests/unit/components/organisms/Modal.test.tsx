import { describe, it, expect, vi } from 'vitest';
import React from 'react';
import { render, screen } from '@testing-library/react';
import { Modal } from '../../../../packages/ui/src/components/organisms/Modal/Modal';
describe('Modal', () => { it('renders when open', () => { render(<Modal isOpen={true} title="Test" onClose={()=>{}}>Body</Modal>); expect(screen.getByText('Test')).toBeInTheDocument(); }); });


