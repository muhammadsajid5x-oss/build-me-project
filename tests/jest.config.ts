import type { Config } from "jest";

const config: Config = {
  preset: "ts-jest",
  testEnvironment: "jsdom",

  rootDir: "..",

  roots: [
    "<rootDir>/apps",
    "<rootDir>/tests/unit",
    "<rootDir>/tests/integration",
  ],

  testMatch: ["**/*.test.ts", "**/*.test.tsx"],

  testPathIgnorePatterns: [
    "/node_modules/",
    "/packages/ui/",
    "/storybook/",
    "/tests/e2e/",
  ],

  setupFilesAfterEnv: ["<rootDir>/tests/jest.setup.ts"],

  transform: {
    "^.+\\.(ts|tsx)$": [
      "ts-jest",
      {
        tsconfig: "<rootDir>/tests/tsconfig.json",
      },
    ],
  },

  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
  },

  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json"],
};

export default config;
