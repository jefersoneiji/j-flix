import { RouterProvider, createMemoryRouter } from "react-router-dom"
import { render, screen, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"

import { routes } from "./router"

const router = createMemoryRouter(routes, {
    initialEntries: ['/show/2']
})

test('should change episodes list based in selected season', async () => {
    const { container } = render(<RouterProvider router={router} />)
    const selectElem = container.querySelector('[name="seasons"]')!

    await userEvent.selectOptions(selectElem, ['4382'])

    await waitFor(() => expect(screen.getByText(/S2.EP1 - Pilot/i)).toBeInTheDocument())
})

test('should show season 1 as default value', async () => {
    render(<RouterProvider router={router} />)
    await waitFor(() => expect(screen.getByText(/S1.EP1 - Pilot/i)).toBeInTheDocument())
})