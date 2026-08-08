import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Badge } from './Badge';

describe('Badge Component', () => {
  it('renders text prop correctly', () => {
    render(<Badge text="Notification" />);
    expect(screen.getByText('Notification')).toBeDefined();
  });

  it('applies variant class correctly', () => {
    render(<Badge text="Secondary" variant="secondary" />);
    const badge = screen.getByText('Secondary');
    expect(badge.className).toContain('badge-secondary');
  });
});
