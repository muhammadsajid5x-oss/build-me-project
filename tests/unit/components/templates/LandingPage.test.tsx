// Place this code inside:
// packages/ui/src/components/templates/LandingPage/LandingPage.test.tsx

import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { LandingPage } from "../../../../packages/ui/src/components/templates/LandingPage/LandingPage";

const mockProps = {
  navbar: { logo: { brand: "Cup&Commit" } },
  hero: {
    content: {
      badge: "Technology Ownership",
      titlePrefix: "Build Better",
      titleHighlight: "Digital Experiences",
      subtitle: "Simple, fast, and beautiful platforms",
      description: "Description text",
    },
    image: {
      avatar: { src: "test.jpg", alt: "Avatar" },
    },
    metrics: [
      {
        icon: "rocket" as const,
        title: "99%",
        description: "Reliability",
      },
    ],
  },
  footer: {},
};

describe("LandingPage Template", () => {
  it("renders Navbar, Hero, and Footer components", () => {
    render(<LandingPage {...(mockProps as any)} />);

    expect(screen.getByText("Cup&Commit")).toBeInTheDocument();

    expect(
      screen.getByRole("heading", {
        name: "Build Better Digital Experiences",
      }),
    ).toBeInTheDocument();
  });
});
//updated
