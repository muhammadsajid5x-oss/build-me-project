module.exports = {
  preset: "ts-jest",
  rootDir: "../../",
  testMatch: ["<rootDir>/tests/integration/**/*.test.ts"],
  moduleFileExtensions: ["ts", "js", "json"],
  transform: {
    "^.+\\.tsx?$": [
      "ts-jest",
      { tsconfig: "<rootDir>/tests/integration/tsconfig.json" },
    ],
  },
};
