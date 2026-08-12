import { describe, it, expect } from "vitest";
import React from "react";
import { render, screen } from "@testing-library/react";
import { HeroImage } from "./HeroImage";

describe("HeroImage Organism", () => {
  it("renders Avatar correctly", () => {
    render(
      <HeroImage src="https://example.com/avatar.jpg" alt="Test Avatar" />,
    );
    const img = screen.getByAltText("Test Avatar");
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute("src", "https://example.com/avatar.jpg");
  });

  it("renders with default props when none provided", () => {
    render(<HeroImage />);
    const img = screen.getByAltText(
      "Engineering professional working with technology",
    );
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute("src", "/Sajid.png");
  });

  it("renders structural elements correctly", () => {
    const { container } = render(<HeroImage />);
    expect(container.querySelector(".hero-image__curve")).toBeInTheDocument();
    expect(
      container.querySelector(".hero-image__digital-background"),
    ).toBeInTheDocument();
  });
});
