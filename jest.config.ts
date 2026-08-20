import type { Config } from "jest";

const config: Config = {
  preset: "ts-jest",
  testEnvironment: "jsdom",

  rootDir: ".",

  roots: ["<rootDir>/tests"],

  testMatch: [
    "<rootDir>/tests/unit/**/*.test.ts",
    "<rootDir>/tests/unit/**/*.test.tsx",
    "<rootDir>/tests/**/*.jest.test.ts",
    "<rootDir>/tests/**/*.jest.test.tsx",
  ],

  transform: {
    "^.+\\.tsx?$": [
      "ts-jest",
      {
        tsconfig: "<rootDir>/tests/tsconfig.json",
      },
    ],
  },

  setupFilesAfterEnv: ["<rootDir>/tests/setup.ts"],

  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json"],

  // Map vitest imports to Jest equivalents and stub out CSS imports
  moduleNameMapper: {
    "^vitest$": "<rootDir>/tests/jest-vitest-shim.ts",
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
  },

  injectGlobals: true,
  clearMocks: true,
};

export default config;
