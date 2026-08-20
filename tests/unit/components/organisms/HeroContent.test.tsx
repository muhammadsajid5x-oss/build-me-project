import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { HeroContent } from '../../../../packages/ui/src/components/organisms/HeroContent/HeroContent';

describe("HeroContent Organism", () => {
  it("renders default static content correctly", () => {
    render(<HeroContent />);

    expect(screen.getByText("TECHNOLOGY OWNERSHIP")).toBeInTheDocument();
    expect(screen.getByText("Build Better")).toBeInTheDocument();
    expect(screen.getByText(/Digital Experiences/i)).toBeInTheDocument();
  });
});


