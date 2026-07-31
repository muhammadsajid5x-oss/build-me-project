import { describe, it, expect } from "@jest/globals";

export function formatCurrency(amount: number): string {
  return `$${amount.toFixed(2)}`;
}

describe("formatCurrency", () => {
  it("formats numbers into currency strings", () => {
    expect(formatCurrency(10)).toBe("$10.00");
  });
});
