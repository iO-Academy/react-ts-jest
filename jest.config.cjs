module.exports = {
    testEnvironment: "jsdom",
    transform: {
        "^.+\\.tsx?$": "ts-jest",
        // Jest cannot deal with SVGs or CSS files, jest-transform-stub fixes that
        "\\.(css|scss|svg)$": "jest-transform-stub",
    },
    // Loads the setup file
    setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
};