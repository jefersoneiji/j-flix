import { render, screen } from "@testing-library/react"
import { RouterProvider, createMemoryRouter } from "react-router-dom"
import userEvent from "@testing-library/user-event"
import { routes } from "./router"

const router = createMemoryRouter(routes, {
    initialEntries: ['/']
})

test('should navigate to movie details page on click', async () => {
    render(<RouterProvider router={router} />)

    await userEvent.click(screen.getByAltText('show-card-1'))

    expect(router.state.location.pathname).toEqual('/show/1')
})