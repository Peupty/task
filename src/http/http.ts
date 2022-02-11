import { TReportContext } from "../components/export-report/context"
import { TFetch } from "../types/browser"

export const exportReport =
  (fetch: TFetch) =>
  async (
    data: Omit<TReportContext, "dispatch">,
    onSuccess: Function,
    onError: Function
  ) => {
    try {
      await fetch("https://postman-echo.com/post", {
        method: "post",
        body: JSON.stringify(data),
        mode: "no-cors",
      })

      onSuccess()
    } catch (error) {
      onError()
    }
  }

export default {
  exportReport: exportReport(fetch),
}

