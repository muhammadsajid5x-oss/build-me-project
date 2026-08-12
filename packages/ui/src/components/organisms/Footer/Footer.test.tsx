import { describe, it, expect } from "vitest";
import React from "react";
import { render, screen } from "@testing-library/react";
import { Footer } from "./Footer";

const sampleSocials = [
  { platform: "linkedin" as const, href: "https://linkedin.com" },
  { platform: "x" as const, href: "https://x.com" },
];

const sampleActions = [
  {
    icon: "share" as const,
    title: "Share This Page",
    description: "Help others.",
    href: "https://example.com",
  },
];

describe("Footer Organism", () => {
  it("renders social links", () => {
    render(<Footer socialLinks={sampleSocials} />);
    expect(
      screen.getByRole("link", { name: /visit linkedin/i }),
    ).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /visit x/i })).toBeInTheDocument();
  });

  it("renders quick action cards", () => {
    render(<Footer quickActions={sampleActions} />);
    // Use getAllByText if duplicates occur or target the specific action heading
    const shareElements = screen.getAllByText("Share This Page");
    expect(shareElements.length).toBeGreaterThan(0);
    expect(screen.getByText("Help others.")).toBeInTheDocument();
  });

  it("renders copyright", () => {
    render(<Footer copyright="© 2026 Test Brand" />);
    expect(screen.getByText("© 2026 Test Brand")).toBeInTheDocument();
  });
});
