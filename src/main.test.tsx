import { test, expect } from 'bun:test'
import { HelloWorld } from './main'
import { render, screen } from '@testing-library/react'

test("Should render correctly", () => {
  render(<HelloWorld />)

  const hello_world_text = screen.getByText(/hello world/);
  expect(hello_world_text).toBeInTheDocument()
})
