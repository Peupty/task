import { TReducer } from "../../types/Reducer"
import { PropType } from "../../types/utility"
import { TReportContext } from "./context"

export const getInitialState = (): TReportContext => ({
  name: "",
  format: "excel",
  email: "",
  scheduleOption: "none",
  date: "",
  dispatch: () => {}
})

export const initialState: TReportContext = getInitialState()

export type TExportReportAction =
  | { type: "UPDATE_NAME"; payload: PropType<TReportContext, "name"> }
  | { type: "UPDATE_FORMAT"; payload: PropType<TReportContext, "format"> }
  | { type: "UPDATE_EMAIL"; payload: PropType<TReportContext, "email"> }
  | {
      type: "UPDATE_SCHEDULE_OPTION"
      payload: PropType<TReportContext, "scheduleOption">
    }
  | { type: "UPDATE_DATE"; payload: PropType<TReportContext, "date"> }

type TExportReportReducer = TReducer<TReportContext, TExportReportAction>

export const reducer: TExportReportReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_NAME": {
      return {
        ...state,
        name: action.payload,
      }
    }
    case "UPDATE_FORMAT": {
      return {
        ...state,
        format: action.payload,
      }
    }
    case "UPDATE_EMAIL": {
      return {
        ...state,
        email: action.payload,
      }
    }
    case "UPDATE_SCHEDULE_OPTION": {
      return {
        ...state,
        scheduleOption: action.payload,
      }
    }
    case "UPDATE_DATE": {
      return {
        ...state,
        date: action.payload,
      }
    }
  }
}
