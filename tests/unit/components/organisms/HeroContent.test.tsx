import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { HeroContent } from "../../../../packages/ui/src/components/organisms/HeroContent/HeroContent";

describe("HeroContent Organism", () => {
  it("renders default static content correctly", () => {
    render(<HeroContent />);

    expect(screen.getByText("TECHNOLOGY OWNERSHIP")).toBeInTheDocument();

    expect(
      screen.getByRole("heading", {
        name: "Build Better Digital Experiences",
      }),
    ).toBeInTheDocument();

    expect(
      screen.getByText(
        "Simple, fast, and beautiful platforms that win and get real results",
      ),
    ).toBeInTheDocument();

    expect(
      screen.getByText(
        /Websites and apps that are easy to use, look great, and work fast/,
      ),
    ).toBeInTheDocument();
  });
});
