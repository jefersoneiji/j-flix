import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { Navbar } from "./navbar";

test('should not show navbar button when in big screen', () => {
    render(<Navbar />)

    expect(screen.queryByRole('button', { name: "show" })).not.toBeInTheDocument()
})

test('should show navbar button when in smaller screens', () => {
    window.innerWidth = 600
    render(<Navbar />)

    expect(screen.getByText(/show menu/i)).toBeInTheDocument()
})

test('should show "close button" after "show menu" is clicked', async () => {
    window.innerWidth = 600
    render(<Navbar />)
    
    await userEvent.click(screen.getByText(/show menu/i))

    expect(screen.getByText(/close menu/i)).toBeInTheDocument()
})

test('should show menu items after "show menu" is clicked', async () => {
    window.innerWidth = 600
    render(<Navbar />)
    
    await userEvent.click(screen.getByText(/show menu/i))

    expect(screen.getByText(/início/i)).toBeInTheDocument()
})