import type { Config } from "jest";

const config: Config = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  rootDir: "..", // Tells Jest the project root is one level up
  roots: ["<rootDir>/tests", "<rootDir>/packages"],
  transform: {
    "^.+\\.tsx?$": [
      "ts-jest",
      {
        // Points to the tsconfig specifically inside your tests folder
        tsconfig: "<rootDir>/tests/tsconfig.json",
      },
    ],
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
};

export default config;
