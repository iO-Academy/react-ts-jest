module.exports = {
    testEnvironment: "jsdom",
    transform: {
        "^.+\\.tsx?$": "ts-jest",
        // Jest cannot deal with files that aren't ts/js
        // jest-transform-stub fixes that
        "\\.(css|scss|svg|jpg|jpeg|png)$": "jest-transform-stub",
    },
    "setupFiles": ["<rootDir>/jest.setup.ts"]
};