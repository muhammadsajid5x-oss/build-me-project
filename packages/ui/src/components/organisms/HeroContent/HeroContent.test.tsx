import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { HeroContent } from './HeroContent';

describe('HeroContent Organism', () => {
  it('renders primary button and handles click', () => {
    const handlePrimary = vi.fn();
    render(
      <HeroContent
        data={{
          badge: 'New',
          title: 'Title',
          subtitle: 'Subtitle',
          description: 'Description',
          primaryAction: { label: 'Click Me', onClick: handlePrimary },
        } as any}
      />
    );
    const button = screen.getByRole('button', { name: /click me/i });
    expect(button).toBeInTheDocument();
    fireEvent.click(button);
    expect(handlePrimary).toHaveBeenCalledTimes(1);
  });
});
