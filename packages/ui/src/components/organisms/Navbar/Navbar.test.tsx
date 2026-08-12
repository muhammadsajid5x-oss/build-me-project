import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Navbar } from "./Navbar";

describe("Navbar Organism", () => {
  it("renders logo brand correctly", () => {
    render(<Navbar logo={{ brand: "YourBrand" }} />);
    expect(screen.getByText("YourBrand")).toBeInTheDocument();
  });

  it("renders navigation bar correctly with default brand", () => {
    render(<Navbar />);
    const headerElements = screen.getAllByRole("banner");
    expect(headerElements.length).toBeGreaterThan(0);
    const brandElements = screen.getAllByText("Cup&Commit");
    expect(brandElements.length).toBeGreaterThan(0);
    expect(brandElements[0]).toBeInTheDocument();
  });
});
