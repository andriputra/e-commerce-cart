import { render, screen } from '@testing-library/react'
import { describe, expect, it, beforeEach } from 'vitest'

import { Footer } from "./index"

describe('Footer', () => {
  beforeEach(() => {
    render(<Footer />)
  })

  it('renders correctly social links', async () => {
    expect(screen.getByText(/linkedin/i)).toBeVisible()
    expect(screen.getByText(/github/i)).toBeVisible()
  })

  it('has social links working correctly', async () => {
    expect(screen.getByText('linkedin').closest('a')).toHaveAttribute('href', 'https://www.linkedin.com/in/agus-andri-putra-6a26a8a7/')
    expect(screen.getByText('github').closest('a')).toHaveAttribute('href', 'https://github.com/andriputra')
  })


  it('should contain copyright info', () => {
    expect(screen.getByText(/© Andri Putra 2023. All rights reserved./i)).toBeVisible()
  })

  it('should contain version number', () => {
    expect(screen.getByText(/v.1.0.01/i)).toBeVisible()
  })
})
