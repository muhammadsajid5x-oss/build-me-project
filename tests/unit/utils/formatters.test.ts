describe("formatCurrency", () => {
  it("formats a number as USD currency", () => {
    const formatCurrency = (amount: number): string => {
      return `$${amount.toFixed(2)}`;
    };

    expect(formatCurrency(100)).toBe("$100.00");
    expect(formatCurrency(99.9)).toBe("$99.90");
  });
});
