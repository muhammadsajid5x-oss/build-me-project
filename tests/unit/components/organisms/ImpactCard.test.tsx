import { describe, it, expect } from "vitest";
import React from "react";
import { render, screen } from "@testing-library/react";
import { ImpactCard } from '../../../../packages/ui/src/components/organisms/ImpactCard/ImpactCard';

const mockMetrics = [
  {
    icon: "shield" as const,
    value: "99.9%",
    label: "System Reliability",
  },
  {
    icon: "rocket" as const,
    value: "Faster",
    label: "Time to Market",
  },
];

describe("ImpactCard Organism", () => {
  it("renders all MetricItems", () => {
    render(<ImpactCard metrics={mockMetrics} />);

    expect(screen.getByText("99.9%")).toBeInTheDocument();
    expect(screen.getByText("System Reliability")).toBeInTheDocument();
    expect(screen.getByText("Faster")).toBeInTheDocument();
    expect(screen.getByText("Time to Market")).toBeInTheDocument();
  });

  it("handles custom metric arrays", () => {
    const custom = [
      {
        icon: "star" as const,
        value: "Top",
        label: "Tier",
      },
    ];

    render(<ImpactCard metrics={custom} />);

    expect(screen.getByText("Top")).toBeInTheDocument();
    expect(screen.getByText("Tier")).toBeInTheDocument();
  });

  it("supports empty data gracefully", () => {
    const { container } = render(<ImpactCard metrics={[]} />);

    // Verify that the body renders safely without crashing when empty
    const body = container.querySelector(".impact-card__body");
    expect(body).toBeInTheDocument();
    expect(body?.children.length).toBe(0);
  });
});


