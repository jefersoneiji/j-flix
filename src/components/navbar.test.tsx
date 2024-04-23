import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { RouterProvider, createMemoryRouter } from "react-router-dom";

import { Navbar } from "./navbar";

const routes = [
    {
        path: '/',
        element: <Navbar />,
    },
]

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
    render(provider)

    expect(screen.getByText(/show menu/i)).toBeInTheDocument()
})

test('should show "close button" after "show menu" is clicked', async () => {
    window.innerWidth = 600
    render(provider)

    await userEvent.click(screen.getByText(/show menu/i))

    expect(screen.getByText(/close menu/i)).toBeInTheDocument()
})

test('should show menu items after "show menu" is clicked', async () => {
    window.innerWidth = 600
    render(provider)

    await userEvent.click(screen.getByText(/show menu/i))

    expect(screen.getByText(/home/i)).toBeInTheDocument()
})