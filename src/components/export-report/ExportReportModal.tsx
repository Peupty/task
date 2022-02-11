import React, { ReactElement, useContext, useEffect, useState } from "react"
import http from "../../http/http"
import { PropType } from "../../types/utility"
import Button from "../BaseButton"
import { ExportReportContext, TReportContext } from "./context"
import { getScheduleComponent } from "./getScheduleComponent"

type TScheduleInput = {
  label: string
  type: PropType<TReportContext, "scheduleOption">
}

type TFormatInput = {
  label: string
  type: PropType<TReportContext, "format">
}

const scheduleTypes: TScheduleInput[] = [
  { label: "No Repeat", type: "none" },
  { label: "Specific Date", type: "date" },
  { label: "Daily", type: "daily" },
  { label: "Weekly", type: "weekly" },
]

const formatTypes: TFormatInput[] = [
  { label: "Excel", type: "excel" },
  { label: "CSV", type: "csv" },
]

type TExportReportModalProps = {
  onCancel: () => void
}

const createResponseCallback = (msg: string, cb?: Function) => () => {
  alert(msg)
  if (cb) cb()
}

const onSuccess = createResponseCallback("your request has been submitted")
const onError = createResponseCallback("an error has occured")

const onSubmit = (
  e: React.FormEvent<HTMLFormElement>,
  data: Omit<TReportContext, "dispatch">
) => {
  e.preventDefault()
  http.exportReport(data, onSuccess, onError)
}

const ExportReportModal: React.FC<TExportReportModalProps> = ({ onCancel }) => {
  let subcomponent
  const { dispatch, ...state } = useContext(ExportReportContext)
  const [scheduleComponent, setScheduleComponent] = useState<
    ReactElement | undefined
  >(getScheduleComponent(state.scheduleOption))

  useEffect(() => {
    subcomponent = getScheduleComponent(state.scheduleOption)
    setScheduleComponent(subcomponent)
  }, [state.scheduleOption])

  return (
    <form onSubmit={e => onSubmit(e, state)}>
      <h1>Export report</h1>
      <fieldset>
        <label htmlFor="report-name" className="label">
          Report name
        </label>
        <input
          type="text"
          name="report-name"
          id="report-name"
          placeholder="Shareable Report"
          onChange={e =>
            dispatch({ type: "UPDATE_NAME", payload: e.target.value })
          }
          required
        />
      </fieldset>
      <fieldset id="format">
        <span className="label">Format</span>
        <div className="row">
          {formatTypes.map(({ label, type }) => (
            <div key={type}>
              <input
                type="radio"
                name="format"
                id={`format-${type}`}
                checked={state.format === type}
                onChange={() =>
                  dispatch({ type: "UPDATE_FORMAT", payload: type })
                }
              />
              <label htmlFor={`format-${type}`}>{label}</label>
            </div>
          ))}
        </div>
      </fieldset>
      <fieldset>
        <label htmlFor="email" className="label">
          Email to
        </label>
        <input
          type="email"
          placeholder="client@company.com"
          id="email"
          required
          onChange={e =>
            dispatch({ type: "UPDATE_EMAIL", payload: e.target.value })
          }
        />
      </fieldset>
      <fieldset id="schedule">
        <span className="label">Schedule</span>
        {scheduleTypes.map(({ label, type }) => (
          <div key={type}>
            <input
              type="radio"
              name="schedule"
              id={type}
              onChange={() =>
                dispatch({ type: "UPDATE_SCHEDULE_OPTION", payload: type })
              }
              checked={state.scheduleOption === type}
            />
            <label htmlFor={type}>{label}</label>
          </div>
        ))}
      </fieldset>
      {scheduleComponent}
      <div>
        <Button type="button" onClick={onCancel}>
          Cancel
        </Button>
        <Button type="submit" variant="dark">
          OK
        </Button>
      </div>
    </form>
  )
}

export default ExportReportModal
