import { render, within, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { QuickActionCard } from '../../../../packages/ui/src/components/molecules/QuickActionCard/QuickActionCard';

describe("QuickActionCard Molecule", () => {
  it("renders description", () => {
    const { container } = render(
      <QuickActionCard icon="share" title="Share" description="Desc" />,
    );

    expect(within(container).getByText("Desc")).toBeInTheDocument();
  });

  it("renders link when href exists", () => {
    const { container } = render(
      <QuickActionCard
        icon="share"
        title="Share"
        description="Desc"
        href="https://example.com"
      />,
    );

    const link = within(container).getByRole("link");

    expect(link).toHaveAttribute("href", "https://example.com");
  });

  it("handles click events", () => {
    const handleClick = vi.fn();

    const { container } = render(
      <QuickActionCard
        icon="share"
        title="Share"
        description="Desc"
        onClick={handleClick}
      />,
    );

    fireEvent.click(container.firstElementChild as HTMLElement);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});


