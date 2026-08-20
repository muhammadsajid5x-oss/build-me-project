import { describe, it, expect } from "vitest";
import { render, within } from "@testing-library/react";
import { MetricItem } from '../../../../packages/ui/src/components/molecules/MetricItem/MetricItem';

describe("MetricItem Molecule", () => {
  it("renders icon", () => {
    const { container } = render(
      <MetricItem
        icon="shield"
        title="99.9%"
        description="System Reliability"
      />,
    );

    expect(container.querySelector(".metric-item__icon")).toBeInTheDocument();
  });

  it("renders title", () => {
    const { container } = render(
      <MetricItem
        icon="shield"
        title="99.9%"
        description="System Reliability"
      />,
    );

    expect(within(container).getByText("99.9%")).toBeInTheDocument();
  });

  it("renders description", () => {
    const { container } = render(
      <MetricItem
        icon="shield"
        title="99.9%"
        description="System Reliability"
      />,
    );

    expect(
      within(container).getByText("System Reliability"),
    ).toBeInTheDocument();
  });

  it("supports different variants", () => {
    const { container } = render(
      <MetricItem
        icon="shield"
        title="99.9%"
        description="System Reliability"
        variant="highlight"
      />,
    );

    expect(container.firstChild).toHaveClass("metric-item--highlight");
  });
});


