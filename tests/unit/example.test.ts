import { describe, test, expect } from "@jest/globals";

describe("Build Me Project Setup", () => {
  test("environment should be configured", () => {
    const environmentCheck = typeof process !== "undefined";
    expect(environmentCheck).toBe(true);
  });
});
