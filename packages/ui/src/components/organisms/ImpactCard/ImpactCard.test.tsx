import { describe, it, expect, vi } from 'vitest';
import React from "react";
import { render, screen } from "@testing-library/react";
import { ImpactCard } from "./ImpactCard";
const mockMetrics = [
  { icon: "shield" as const, title: "99.9%", description: "System Reliability" },
  { icon: "rocket" as const, title: "Faster", description: "Time to Market" },
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
    const custom = [{ icon: "star" as const, title: "Top", description: "Tier" }];
    render(<ImpactCard metrics={custom} />);
    expect(screen.getByText("Top")).toBeInTheDocument();
    expect(screen.getByText("Tier")).toBeInTheDocument();
  });
  it("supports empty data gracefully", () => {
    render(<ImpactCard metrics={[]} />);
    expect(screen.getByText("No metrics available")).toBeInTheDocument();
  });
});
