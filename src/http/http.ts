import { TReportContext } from "../components/export-report/context"
import { TFetch } from "../types/browser"

export const exportReport =
  (fetch: TFetch, url: string) =>
  async (
    data: Omit<TReportContext, "dispatch">,
    onSuccess: Function,
    onError: Function
  ) => {
    try {
      await fetch(url, {
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
  exportReport: exportReport(fetch, "https://postman-echo.com/post"),
}

