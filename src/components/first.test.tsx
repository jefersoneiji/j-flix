import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import { RouterProvider, createMemoryRouter } from "react-router-dom";

import { First } from "./first";
import { Second } from "./second";

const routes = [
    { path: '/', element: <First /> },
    { path: '/second', element: <Second /> },
]

const router = createMemoryRouter(routes, {
    initialEntries: ['/']
})
test('should render counter equals 0', () => {
    render(<RouterProvider router={router} />)

    expect(screen.getByText(/count is 0/i)).toBeTruthy()
})

test('should increase counter to 1', async () => {
    render(<RouterProvider router={router} />)

    await userEvent.click(screen.getByRole('button', { name: /increase/ }))

    expect(screen.getByText(/count is 1/i)).toBeInTheDocument()
})

test('should navigate to second screen', async () => {
    render(<RouterProvider router={router} />)

    await userEvent.click(screen.getByText('Navigate to page 2'))

    expect(screen.getByText(/Second screen!/i)).toBeInTheDocument()
})