import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { RouterProvider, createMemoryRouter } from "react-router-dom";
import { routes } from "./router";

const router = createMemoryRouter(routes, {
    initialEntries: ['/']
})

const provider = <RouterProvider router={router} />

test('should not show navbar button when in big screen', () => {
    render(provider)

    expect(screen.queryByRole('button', { name: "show" })).not.toBeInTheDocument()
})

test('should show navbar button when in smaller screens', () => {
    window.innerWidth = 600
    const { container } = render(provider)

    expect(container.querySelector('[name="show-menu"]')).toBeInTheDocument()
})

test('should show "close button" after "show menu" is clicked', async () => {
    window.innerWidth = 600
    const { container } = render(provider)

    await userEvent.click(container.querySelector('[name="show-menu"]')!)

    expect(container.querySelector('[name="hide-menu"]')).toBeInTheDocument()
})

test('should show menu items after "show menu" is clicked', async () => {
    window.innerWidth = 600
    const { container } = render(provider)

    await userEvent.click(container.querySelector('[name="show-menu"]')!)

    expect(screen.getAllByText(/home/i)[0]).toBeInTheDocument()
})