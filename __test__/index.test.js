import { render, screen } from '@testing-library/react'
import Home from '../pages/index'
import '@testing-library/jest-dom'

describe('Home', () => {
  it('renders a paragraph', () => {
    render(<Home />)

    const paragraph = screen.getByRole(('link'), {
      name: /Popular people/i,
    })

    expect(paragraph).toBeInTheDocument()
  })
})