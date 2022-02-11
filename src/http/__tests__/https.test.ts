import { TReportContext } from "../../components/export-report/context"
import { exportReport as createExportReport } from "../http"

describe("exportReport method", () => {
  const data: Omit<TReportContext, "dispatch"> = {
    name: "test",
    email: "test@test.com",
    format: "csv",
    scheduleOption: "none",
  }

  test("should call fetch with correct arguments", async () => {
    const mockFetch = jest.fn()
    const onSuccess = jest.fn()
    const onError = jest.fn()
    const exportReport = createExportReport(mockFetch, "test url")

    await exportReport(data, onSuccess, onError)

    expect(mockFetch.mock.calls[0][0]).toEqual("test url")
    expect(mockFetch.mock.calls[0][1]).toStrictEqual({
      method: "post",
      body: JSON.stringify(data),
      mode: "no-cors",
    })
  })

  test("should call onSuccess callback on success", async () => {
    const mockFetch = jest.fn().mockImplementationOnce(() => Promise.resolve())
    const onSuccess = jest.fn()
    const onError = jest.fn()
    const exportReport = createExportReport(mockFetch, "test url")

    await exportReport(data, onSuccess, onError)

    expect(onSuccess).toHaveBeenCalled()
    expect(onError).not.toHaveBeenCalled()
  })

  test("should call onError callback on error", async () => {
    const mockFetch = jest.fn().mockImplementationOnce(() => Promise.reject())
    const onSuccess = jest.fn()
    const onError = jest.fn()
    const exportReport = createExportReport(mockFetch, "test url")

    await exportReport(data, onSuccess, onError)

    expect(onSuccess).not.toHaveBeenCalled()
    expect(onError).toHaveBeenCalled()
  })
})
