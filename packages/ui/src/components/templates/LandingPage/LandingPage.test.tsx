import { describe, it, expect, vi } from 'vitest';
import React from "react";
import { render, screen } from "@testing-library/react";
import { LandingPage } from "./LandingPage";
const mockProps = {
  navbar: {
    links: [{ label: "Home", href: "/" }],
  },
  hero: {
    content: {
      badge: "Tech",
      title: "Engineering Excellence",
      description: "Description text",
    },
    image: {
      avatar: { src: "test.jpg", alt: "Avatar" },
    },
    metrics: [{ icon: "shield" as const, title: "99%", description: "Reliability" }],
  },
  footer: {
    copyright: "� 2026 Test",
  },
};
describe("LandingPage Template", () => {
  it("renders Navbar, Hero, and Footer components", () => {
    render(<LandingPage {...mockProps} />);
    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("Engineering Excellence")).toBeInTheDocument();
    expect(screen.getByText("� 2026 Test")).toBeInTheDocument();
  });
});
