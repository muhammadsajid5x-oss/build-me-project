import { describe, it, expect } from "vitest";
import { render, within } from "@testing-library/react";
import { Logo } from "./Logo";

describe("Logo", () => {
  it("renders logo icon", () => {
    const { container } = render(<Logo />);

    expect(container.querySelector("svg")).toBeInTheDocument();
  });

  it("renders brand name", () => {
    const { container } = render(<Logo />);

    expect(within(container).getByText("YourBrand")).toBeInTheDocument();
  });

  it("hides text when showText=false", () => {
    const { container } = render(<Logo showText={false} />);

    expect(within(container).queryByText("YourBrand")).not.toBeInTheDocument();
  });

  it("applies selected size", () => {
    const { container } = render(<Logo size="lg" />);

    expect(container.firstChild).toHaveClass("logo");
  });
});
