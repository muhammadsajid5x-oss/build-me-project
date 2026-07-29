import { defineConfig } from "vitest/config";
import { resolve } from "path";

export default defineConfig({
  root: resolve(__dirname, "../../"),
  test: {
    include: ["packages/**/*.{test,spec}.ts", "apps/**/*.{test,spec}.ts"],
    exclude: ["tests/integration/**", "node_modules/**"],
  },
});
