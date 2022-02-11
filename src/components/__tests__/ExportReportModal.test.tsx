import React from "react"
import { render, screen, fireEvent } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import ExportReportModal from "../export-report/ExportReportModal"
import ExportReportModalProvider from "../export-report/ExportReportContextProvider"

describe("ExportReportModal component", () => {
  test("should render", () => {
    const onCancel = jest.fn()
    const onSubmit = jest.fn()

    render(
      <ExportReportModalProvider>
        <ExportReportModal
          onCancel={onCancel}
          onSubmit={onSubmit}
        ></ExportReportModal>
      </ExportReportModalProvider>
    )

    let component = screen.getByTestId("export-report")

    expect(component).toBeInTheDocument()
  })

  test("should load correct subcomponents", () => {
    const onCancel = jest.fn()
    const onSubmit = jest.fn()

    render(
      <ExportReportModalProvider>
        <ExportReportModal
          onCancel={onCancel}
          onSubmit={onSubmit}
        ></ExportReportModal>
      </ExportReportModalProvider>
    )

    let options = screen
      .getByTestId("form-schedule-option")
      .querySelectorAll(".radio-button")

    fireEvent.click(options[1])
    let actual = screen.getByTestId("date")
    expect(actual).toBeInTheDocument()

    fireEvent.click(options[2])
    actual = screen.getByTestId("daily")
    expect(actual).toBeInTheDocument()

    fireEvent.click(options[3])
    actual = screen.getByTestId("weekly")
    expect(actual).toBeInTheDocument()
  })

  test("should call onCancel function on cancel click", () => {
    const onCancel = jest.fn()
    const onSubmit = jest.fn()

    render(
      <ExportReportModalProvider>
        <ExportReportModal
          onCancel={onCancel}
          onSubmit={onSubmit}
        ></ExportReportModal>
      </ExportReportModalProvider>
    )

    const cancel = screen.getByTestId("cancel")

    fireEvent.click(cancel)

    expect(onCancel).toHaveBeenCalledTimes(1)
  })

  test("should submit form with correct data", () => {
    const onCancel = jest.fn()
    const onSubmit = jest.fn()

    render(
      <ExportReportModalProvider>
        <ExportReportModal
          onCancel={onCancel}
          onSubmit={onSubmit}
        ></ExportReportModal>
      </ExportReportModalProvider>
    )

    const form = screen.getByTestId("export-report")
    const name = screen.getByTestId("name")
    const email = screen.getByTestId("email")

    userEvent.type(name, "test")
    userEvent.type(email, "test@test.com")

    fireEvent.submit(form)

    expect(onSubmit.mock.calls[0][1]).toMatchObject({
      name: "test",
      format: "excel",
      scheduleOption: "none",
      email: "test@test.com",
    })
  })
})
