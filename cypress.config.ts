import { defineConfig } from "cypress";

export default defineConfig({
  allowCypressEnv: false,

  e2e: {
    baseUrl: "http://localhost:5173",
    specPattern: "tests/e2e/**/*.cy.{js,jsx,ts,tsx}",
    supportFile: false,
    video: false,
    screenshotOnRunFailure: true,
  },
});
