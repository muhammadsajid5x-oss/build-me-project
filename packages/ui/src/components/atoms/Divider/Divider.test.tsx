import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { Divider } from "./Divider";

describe("Divider", () => {
  it("renders correctly", () => {
    const { container } = render(<Divider />);
    const hr = container.querySelector(".divider");
    expect(hr).toBeInTheDocument();
  });

  it("renders horizontal orientation by default", () => {
    const { container } = render(<Divider orientation="horizontal" />);
    const hr = container.querySelector(".divider--horizontal");
    expect(hr).toBeInTheDocument();
  });

  it("renders vertical orientation correctly", () => {
    const { container } = render(<Divider orientation="vertical" />);
    const span = container.querySelector(".divider--vertical");
    expect(span).toBeInTheDocument();
    expect(span).toHaveAttribute("aria-hidden", "true");
  });

  it("applies custom className", () => {
    const { container } = render(<Divider className="custom-class" />);
    const divider = container.querySelector(".divider");
    expect(divider).toHaveClass("custom-class");
  });
});
