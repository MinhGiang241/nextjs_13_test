import Home from "@/app/page"
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'


describe("Home page", () => {
  it('SHould render property', () => {
    render(<Home />)
    const header = screen.getByRole('heading')
    const headerText = "Explore the Next.js 13 playground."
    expect(header).toHaveTextContent(headerText)
  })
})
