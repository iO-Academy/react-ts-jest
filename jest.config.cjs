module.exports = {
    testEnvironment: "jsdom",
    transform: {
        "^.+\\.tsx?$": "ts-jest",
        // Jest cannot deal with SVGs or CSS files, jest-transform-stub fixes that
        "\\.(css|scss|svg)$": "jest-transform-stub",
    },
    "setupFiles": ["<rootDir>/jest.setup.ts"]
};