import {render, screen} from "@testing-library/react";
import "@testing-library/jest-dom";
import Footer from "./Footer.tsx";

describe("Footer", () => {
    test("Renders correctly without props", () => {
        render(<Footer />)

        expect(screen.getByText("Copyright")).toBeInTheDocument()
        // We need to use queryByText here because getByText throws an error if not found
        // we don't want it to be found in this case
        expect(screen.queryByText(/0123456789/)).not.toBeInTheDocument()
    })

    test("Renders correctly with full prop", () => {
        render(<Footer full={true} />)

        expect(screen.getByText("Copyright")).toBeInTheDocument()
        expect(screen.getByText(/0123456789/)).toBeInTheDocument()
    })
})