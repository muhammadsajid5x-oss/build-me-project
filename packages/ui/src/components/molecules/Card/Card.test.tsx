import { describe, it, expect, vi } from 'vitest';
import React from 'react';
import { render, screen } from '@testing-library/react';
import { Card } from './Card';
describe('Card', () => { it('renders title', () => { render(<Card title="Test">Body</Card>); expect(screen.getByText('Test')).toBeInTheDocument(); }); });
