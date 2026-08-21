import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Hero } from "../../../../packages/ui/src/components/organisms/Hero/Hero";

const mockHeroProps = {
  content: {
    badge: "TECHNOLOGY OWNERSHIP",
    titlePrefix: "Build Better",
    titleHighlight: "Digital Experiences",
    subtitle:
      "Simple, fast, and beautiful platforms that win and get real results",
    description:
      "Websites and apps that are easy to use, look great, and work fast.",
  },
  image: {
    avatar: {
      src: "https://example.com/avatar.jpg",
      alt: "Test Avatar",
    },
  },
  metrics: [
    {
      icon: "shield" as const,
      title: "99.9%",
      description: "System Reliability",
    },
  ],
};

describe("Hero Organism", () => {
  it("renders correctly with mock props", () => {
    render(<Hero {...mockHeroProps} />);

    // Assert that the title is correctly rendered through the component tree
    expect(
      screen.getByRole("heading", {
        name: "Build Better Digital Experiences",
      }),
    ).toBeInTheDocument();

    // Assert that the semantic section wrapper with the hero class is present
    const heroElement = document.querySelector(".hero");
    expect(heroElement).toBeInTheDocument();
  });
});
