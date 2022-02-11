import http from "../../http/http"
import { createResponseCallback } from "../../utils/createResponseCallback"
import { TReportState } from "./context"

export const onSuccess = (cb: Function) =>
  createResponseCallback("your request has been submitted", cb)

export const onError = createResponseCallback("an error has occured")

export const onSubmit =
  (onSuccess: Function, onError: Function) =>
  (
    e: React.FormEvent<HTMLFormElement>,
    data: TReportState,
    cb: Function
  ) => {
    e.preventDefault()
    http.exportReport(data, onSuccess(cb), onError)
  }

export default onSubmit(onSuccess, onError)
