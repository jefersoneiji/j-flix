import { RouterProvider, createMemoryRouter } from "react-router-dom"
import { render, screen, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"

import { App } from "../../../App"
import { ShowDetails } from "../show-details"
import mockShowDetails from './mock-show-details.json'
import mockShowSeasons from './mock-show-seasons.json'

const showDetailsLoader = () => {
    return { showDetails: mockShowDetails, showSeasons: mockShowSeasons }
}
const routes = [
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/show/:showId',
                element: <ShowDetails />,
                loader: showDetailsLoader
            }
        ]
    },
]

const router = createMemoryRouter(routes, {
    initialEntries: ['/show/2']
})

test.skip('should change episodes list based in selected season', async () => {
    const { container } = render(<RouterProvider router={router} />)
    const selectElem = container.querySelector('[name="seasons"]')!

    await userEvent.selectOptions(selectElem, ['4382'])

    await waitFor(()=>expect(screen.getByText(/S2.EP1 - Bad Blood/)).toBeInTheDocument())
})

test.skip('should show season 1 as default value', async () => {
    render(<RouterProvider router={router} />)

    await waitFor(() => expect(screen.getByText(/S1.EP1 - Summons/i)).toBeInTheDocument())

})