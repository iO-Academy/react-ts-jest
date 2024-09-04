import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Nav from "./Nav";
import {userEvent} from "@testing-library/user-event";

describe("Nav", () => {
    test("Renders correctly", () => {
        render(<Nav />)

        const logo = screen.getByText("Logo")
        const menuButton = screen.getByText("Menu")

        expect(logo).toBeInTheDocument()
        expect(menuButton).toBeInTheDocument()
        expect(menuButton.tagName).toBe("BUTTON")
        expect(screen.queryByRole("menu")).not.toBeInTheDocument()
    })

    test("Menu opens and closes when button is clicked", async () => {
        const user = userEvent.setup()
        render(<Nav />)

        const menuButton = screen.getByText("Menu")

        await user.click(menuButton)
        expect(screen.queryByRole("menu")).toBeInTheDocument()
        await user.click(menuButton)
        expect(screen.queryByRole("menu")).not.toBeInTheDocument()
    })
})