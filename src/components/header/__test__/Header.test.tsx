import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { Header } from '../Header'

describe("Verificar se existe o texto 'sistemas' ", ()=> {
    render(<Header />);
    const marca = screen.getByTestId("marca")
    expect(marca).toBeInTheDocument()
})