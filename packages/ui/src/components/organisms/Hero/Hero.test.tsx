import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Hero } from "./Hero";

const mockHeroProps = {
  content: {
    badge: "Technology Ownership",
    title: "Engineering Excellence",
    description: "Helping organizations build high-performing teams.",
    ctaText: "Get Started",
  },
  image: {
    avatar: {
      src: "https://example.com/avatar.jpg",
      alt: "Test Avatar",
    },
  },
  metrics: [
    {
      value: "99.9%",
      label: "System Reliability",
      icon: "shield" as const,
      title: "Reliability",
      description: "Uptime guarantee",
    },
  ],
};

describe("Hero Organism", () => {
  it("renders ImpactCard metrics", () => {
    render(<Hero {...mockHeroProps} />);

    expect(screen.getByText("Reliability")).toBeInTheDocument();
    expect(screen.getByText("Uptime guarantee")).toBeInTheDocument();
  });
});
