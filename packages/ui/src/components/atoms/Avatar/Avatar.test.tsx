import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Avatar } from './Avatar';

describe('Avatar', () => {
  const testSrc = 'https://example.com/avatar.jpg';
  const testAlt = 'Test User';

  it('renders alt text correctly', () => {
    render(<Avatar src={testSrc} alt={testAlt} />);
    const imgs = screen.getAllByRole('img');
    expect(imgs[0]).toHaveAttribute('alt', testAlt);
  });
});
