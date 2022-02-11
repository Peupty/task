import { createContext, Dispatch } from "react"
import { TWeekday } from "../../constants/weekdays"
import { getInitialState, TExportReportAction } from "./reducer"

export type TReportContext = {
  name: string
  format: TReportFormat
  email: string
  scheduleOption: TScheduleOption
  date?: TReportDate,
  dispatch: Dispatch<TExportReportAction>
}

export type TScheduleOption = "none" | "date" | "daily" | "weekly"

export type TReportFormat = "excel" | "csv"

export type TReportDate =
  | string
  | {
      day: string | TWeekday
      hour?: string
    }

export const ExportReportContext = createContext<TReportContext>(
  getInitialState()
)

