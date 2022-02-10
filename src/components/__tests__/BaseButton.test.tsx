import React from "react"
import { render, screen, fireEvent } from "@testing-library/react"
import Button from "../BaseButton"

describe("Button component", () => {
  test("should render with correct text", () => {
    render(<Button onClick={() => {}}>test name</Button>)
    const buttonElement = screen.getByRole("button")

    expect(buttonElement).toBeInTheDocument()
    expect(buttonElement.textContent).toEqual("test name")
  })

  test("should render with correct variant", () => {
    render(
      <Button onClick={() => {}} variant="dark">
        test name
      </Button>
    )
    const buttonElement = screen.getByRole("button")

    expect(buttonElement).toHaveClass("button", "button--dark")
  })

  test("should trigger onClick callback function", () => {
    const cb = jest.fn()
    render(<Button onClick={cb}>test name</Button>)
    const buttonElement = screen.getByRole("button")

    fireEvent.click(buttonElement)

    expect(cb).toHaveBeenCalledTimes(1)
  })
})
