import { describe, it, expect } from "vitest";

export function formatCurrency(amount: number): string {
  return `$${amount.toFixed(2)}`;
}

describe("formatCurrency Unit Test", () => {
  it("formats numbers into standard USD format", () => {
    expect(formatCurrency(49.9)).toBe("$49.90");
    expect(formatCurrency(100)).toBe("$100.00");
  });
});
