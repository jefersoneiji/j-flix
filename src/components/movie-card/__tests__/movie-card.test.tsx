import { render, screen } from "@testing-library/react"
import { RouterProvider, createMemoryRouter } from "react-router-dom"
import userEvent from "@testing-library/user-event"

import { App } from "../../../App"
import { Home } from "../../../modules/home/home"
import { ShowDetails } from "../../../modules/show-details/show-details"

import mockMovieCard from './mock-movie-card.json'
const mockLoader = () => {
    return { shows: mockMovieCard }
}
const routes = [
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <Home />,
                loader: mockLoader
            },
            {
                path: '/show/:showId',
                element: <ShowDetails />
            }
        ]
    },

]

const router = createMemoryRouter(routes, {
    initialEntries: ['/']
})

test('should navigate to movie details page on click', async () => {
    render(<RouterProvider router={router} />)

    await userEvent.click(screen.getByAltText('show-card-1'))

    expect(router.state.location.pathname).toEqual('/show/1')
})