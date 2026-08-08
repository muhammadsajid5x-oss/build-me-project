import { describe, it, expect, vi } from "vitest";
import { render, fireEvent, within } from "@testing-library/react";
import { Button } from "./Button";

describe("Button", () => {
  it("renders children correctly", () => {
    const { container } = render(<Button>Click Me</Button>);

    expect(
      within(container).getByRole("button", { name: /click me/i }),
    ).toBeInTheDocument();
  });

  it("handles click events", () => {
    const handleClick = vi.fn();

    const { container } = render(
      <Button onClick={handleClick}>Click Me</Button>,
    );

    fireEvent.click(within(container).getByRole("button"));

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("respects disabled state", () => {
    const handleClick = vi.fn();

    const { container } = render(
      <Button disabled onClick={handleClick}>
        Disabled
      </Button>,
    );

    const button = within(container).getByRole("button");

    expect(button).toBeDisabled();

    fireEvent.click(button);

    expect(handleClick).not.toHaveBeenCalled();
  });

  it("shows loading state and disables interaction", () => {
    const handleClick = vi.fn();

    const { container } = render(
      <Button loading onClick={handleClick}>
        Loading
      </Button>,
    );

    const button = within(container).getByRole("button");

    expect(button).toBeDisabled();

    fireEvent.click(button);

    expect(handleClick).not.toHaveBeenCalled();
  });

  it("applies correct variant classes", () => {
    const { container, rerender } = render(
      <Button variant="secondary">Secondary</Button>,
    );

    expect(within(container).getByRole("button")).toHaveClass("bg-slate-800");

    rerender(<Button variant="outline">Outline</Button>);

    expect(within(container).getByRole("button")).toHaveClass("border");
  });

  it("applies correct size classes", () => {
    const { container, rerender } = render(<Button size="sm">Small</Button>);

    expect(within(container).getByRole("button")).toHaveClass("h-9");

    rerender(<Button size="lg">Large</Button>);

    expect(within(container).getByRole("button")).toHaveClass("h-12");
  });
});
