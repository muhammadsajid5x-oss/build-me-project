describe("Build Me Project Setup", () => {
  test("environment configuration should match expected state", () => {
    const environment = process.env.NODE_ENV || "test";
    expect(["test", "development", "production"]).toContain(environment);
  });
});
