import { describe, it, expect, vi } from 'vitest';
import React from "react";
import { render, screen } from "@testing-library/react";
import { HeroImage } from "./HeroImage";
describe("HeroImage Organism", () => {
  const mockAvatar = {
    src: "https://example.com/avatar.jpg",
    alt: "Test Avatar",
  };
  it("renders Avatar correctly", () => {
    render(<HeroImage avatar={mockAvatar} />);
    const img = screen.getByAltText("Test Avatar");
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute("src", mockAvatar.src);
  });
  it("renders decorative background when enabled", () => {
    const { container } = render(<HeroImage avatar={mockAvatar} showDecoration={true} />);
    expect(container.querySelector(".hero-image__decorations")).toBeInTheDocument();
  });
  it("hides decoration when disabled", () => {
    const { container } = render(<HeroImage avatar={mockAvatar} showDecoration={false} />);
    expect(container.querySelector(".hero-image__decorations")).not.toBeInTheDocument();
  });
});
