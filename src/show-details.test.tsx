import { RouterProvider, createMemoryRouter } from "react-router-dom"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"

import { App } from "./App"
import { ShowDetails } from "./show-details"

const routes = [
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/show/:showId',
                element: <ShowDetails />
            }
        ]
    },

]

const router = createMemoryRouter(routes, {
    initialEntries: ['/show/2']
})

test('should change episodes list based in selected season', async () => {
    const { container } = render(<RouterProvider router={router} />)
    const selectElem = container.querySelector('[name="seasons"]')!

    await userEvent.selectOptions(selectElem, ['2'])

    expect(screen.getAllByText(/S2.EP1/)[0]).toBeInTheDocument()
})

test('should show season 1 as default value', () => {
    render(<RouterProvider router={router} />)

    expect(screen.getAllByText(/S1.EP1/)[0]).toBeInTheDocument()
})