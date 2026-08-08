import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { SocialIcon } from './SocialIcon';

describe('SocialIcon Molecule', () => {
  it('renders correctly', () => {
    const { container } = render(<SocialIcon platform='linkedin' />);
    const icon = container.querySelector('a');
    expect(icon).toBeInTheDocument();
    expect(icon).toHaveAttribute('aria-label', 'Visit linkedin');
  });
});
