describe("Jest Testing Foundation", () => {
  it("should validate environment configuration variables", () => {
    const appConfig = {
      environment: "test",
      timeout: 5000,
      enabled: true,
    };

    expect(appConfig).toHaveProperty("environment", "test");
    expect(appConfig.timeout).toBeGreaterThan(0);
    expect(appConfig.enabled).toBeTruthy();
  });

  it("should format and validate user display names correctly", () => {
    const formatName = (firstName: string, lastName: string): string => {
      return `${lastName.trim()}, ${firstName.trim()}`;
    };

    const formatted = formatName("  John ", "Doe");
    expect(formatted).toEqual("Doe, John");
    expect(formatted).toContain("Doe");
  });
});
