import {render, screen} from "@testing-library/react";
import "@testing-library/jest-dom";
import Content from "./Content";
import fetchMock from "jest-fetch-mock";

describe("Content", () => {
    test("Renders correctly", async () => {
        // jest-fetch-mock allows us to mock responses from fetch requests
        fetchMock.mockResponse(JSON.stringify([
            {
                name: "United Kingdom",
                code: "UK"
            },
            {
                name: "France",
                code: "FR"
            }
        ]))

        render(<Content />)

        expect(screen.getByRole("heading")).toBeInTheDocument()

        expect(await screen.findByText("United Kingdom")).toBeInTheDocument()
        expect(await screen.findByText("France")).toBeInTheDocument()

    })
})