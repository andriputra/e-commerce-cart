import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import App from "./App.tsx"

describe('App', () => {
  it('should renders correctly', async () => {
    render(<App />)
    expect(screen.getByAltText(/e Commerce Cart/i)).toBeInTheDocument()
    expect(screen.getByAltText(/Go to Cart/i)).toBeInTheDocument()
    expect(await screen.findByText('Products')).toBeInTheDocument()
    expect(await screen.findByText('iPhone 9')).toBeInTheDocument()
    expect(await screen.findByText('© Andri Putra 2023. All rights reserved.')).toBeInTheDocument()
  })
})
