import { describe, it, expect, vi } from 'vitest';
import { render } from '@testing-library/react';
import { Icon } from './Icon';
describe('Icon', () => {
  it('renders the requested icon', () => {
    const { container } = render(<Icon name="shield" />);
    expect(container.querySelector('svg')).toBeInTheDocument();
  });
  it('applies custom size and color', () => {
    const { container } = render(<Icon name="rocket" size={32} color="#ff0000" />);
    const svg = container.querySelector('svg');
    expect(svg).toHaveAttribute('width', '32');
    expect(svg).toHaveAttribute('height', '32');
    expect(svg).toHaveAttribute('stroke', '#ff0000');
  });
});
