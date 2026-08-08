import { describe, it, expect, vi } from 'vitest';
import { render } from '@testing-library/react';
import { Divider } from './Divider';
describe('Divider', () => {
  it('renders correctly', () => {
    const { container } = render(<Divider />);
    const hr = container.querySelector('hr');
    expect(hr).toBeInTheDocument();
  });
  it('renders horizontal orientation by default', () => {
    const { container } = render(<Divider orientation="horizontal" />);
    const hr = container.querySelector('hr');
    expect(hr).toHaveAttribute('aria-orientation', 'horizontal');
    expect(hr).toHaveClass('w-full');
  });
  it('renders vertical orientation correctly', () => {
    const { container } = render(<Divider orientation="vertical" />);
    const hr = container.querySelector('hr');
    expect(hr).toHaveAttribute('aria-orientation', 'vertical');
  });
  it('applies custom color', () => {
    const { container } = render(<Divider color="light" />);
    const hr = container.querySelector('hr');
    expect(hr).toHaveClass('bg-slate-700');
  });
  it('applies custom spacing', () => {
    const { container } = render(<Divider spacing="lg" />);
    const hr = container.querySelector('hr');
    expect(hr).toHaveClass('my-6');
  });
});
