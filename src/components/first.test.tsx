import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event'

import { First } from "./first";

test('should render counter equals 0', () => {
    render(<First />)

    expect(screen.getByText(/count is 0/i)).toBeTruthy()
})

test('should increase counter to 1', async () => {
    render(<First />)

    await userEvent.click(screen.getByRole('button', { name: /increase/ }))

    expect(screen.getByText(/count is 1/i)).toBeInTheDocument()
})