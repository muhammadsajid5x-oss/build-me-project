import type { Config } from "jest";

const config: Config = {
  preset: "ts-jest",
  testEnvironment: "jsdom",

  rootDir: ".",

  roots: ["<rootDir>/tests"],

  testMatch: [
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

  clearMocks: true,
};

export default config;
