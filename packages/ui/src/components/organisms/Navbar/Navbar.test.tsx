import { describe, it, expect, vi } from 'vitest';
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Navbar } from "./Navbar";

const sampleLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
];

describe("Navbar Organism", () => {
  it("renders logo", () => {
    const { container } = render(<Navbar links={sampleLinks} />);
    const logoElement = container.querySelector("svg");
    expect(logoElement).toBeInTheDocument();
  });

  it("renders navigation items", () => {
    render(<Navbar links={sampleLinks} />);
    const homeLinks = screen.getAllByText("Home");
    const aboutLinks = screen.getAllByText("About");

    expect(homeLinks[0]).toHaveAttribute("href", "/");
    expect(aboutLinks[0]).toHaveAttribute("href", "/about");
  });

  it("renders navigation bar correctly", () => {
    render(<Navbar links={sampleLinks} />);

    const homeLinks = screen.getAllByText("Home");
    expect(homeLinks[0]).toBeInTheDocument();
  });
});
