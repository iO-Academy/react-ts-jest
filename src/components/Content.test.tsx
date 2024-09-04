import {render, screen, waitFor} from "@testing-library/react";
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

        // Because the Content fetches data with a useEffect, we need to use
        // waitFor to pause assertions till the data has been fetched
        await waitFor(() => {
            expect(screen.getByText("United Kingdom")).toBeInTheDocument()
            expect(screen.getByText("France")).toBeInTheDocument()
        })

        expect(screen.getByRole("heading")).toBeInTheDocument()
    })
})