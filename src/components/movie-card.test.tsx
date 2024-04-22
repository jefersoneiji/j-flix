import { render, screen } from "@testing-library/react"
import { RouterProvider, createMemoryRouter } from "react-router-dom"

import { MovieDetails } from "../router"
import { App } from "../App"
import userEvent from "@testing-library/user-event"

const routes = [
    { path: '/', element: <App /> },
    { path: '/movie/:movieId', element: <MovieDetails /> }
]

const router = createMemoryRouter(routes, {
    initialEntries: ['/']
})

test('should navigate to movie details page on click', async() => {
    render(<RouterProvider router={router} />)

    await userEvent.click(screen.getByAltText('movie-card-1'))

    expect(router.state.location.pathname).toEqual('/movie/1')
})