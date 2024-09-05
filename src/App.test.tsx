import {render, screen} from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";
import fetchMock from "jest-fetch-mock";

describe("App", () => {
    test("Renders correctly", async () => {
        fetchMock.mockResponse(JSON.stringify([
            {
                name: "United Kingdom",
                code: "UK"
            }
        ]))

        render(<App />)

        expect(screen.getByRole("navigation")).toBeInTheDocument()
        expect(screen.getByText("Copyright")).toBeInTheDocument()
        expect(await screen.findByText("United Kingdom")).toBeInTheDocument()
    })
})