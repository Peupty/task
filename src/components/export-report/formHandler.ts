import http from "../../http/http"
import { TReportContext } from "./context"
import { createResponseCallback } from "../../utils/createResponseCallback"

export const onSuccess = (cb: Function) =>
  createResponseCallback("your request has been submitted", cb)

export const onError = createResponseCallback("an error has occured")

export const onSubmit =
  (onSuccess: Function, onError: Function) =>
  (
    e: React.FormEvent<HTMLFormElement>,
    data: Omit<TReportContext, "dispatch">,
    cb: Function
  ) => {
    e.preventDefault()
    http.exportReport(data, onSuccess(cb), onError)
  }

export default onSubmit(onSuccess, onError)
