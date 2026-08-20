import { defineConfig } from "vitest/config";
import { resolve } from "node:path";
export default defineConfig({
  root: resolve(__dirname),
  test: {
    environment: "jsdom",
    include: [
      "tests/unit/**/*.{test,spec}.{ts,tsx}",
      "tests/integration/**/*.{test,spec}.{ts,tsx}"
    ],
    exclude: [
      "node_modules/**",
      "dist/**",
      ".turbo/**",
      "tests/e2e/**"
    ],
    setupFiles: [
      "tests/setup.ts"
    ],
    globals: true
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "packages")
    }
  }
});
