export default {
  preset: "ts-jest",
  rootDir: "src",
  testEnvironment: "jest-environment-jsdom",
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
};
