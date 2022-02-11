import React, { ReactElement, useContext, useEffect, useState } from "react"
import Button from "../BaseButton"
import { ExportReportContext } from "./context"
import onSubmit from "./formHandler"
import { getScheduleComponent } from "./getScheduleComponent"
import ReportEmail from "./ReportEmail"
import ReportFormat from "./ReportFormat"
import ReportName from "./ReportName"
import ReportScheduleOption from "./ReportScheduleType"

type TExportReportModalProps = {
  onCancel: () => void
}

const ExportReportModal: React.FC<TExportReportModalProps> = ({ onCancel }) => {
  const { dispatch, ...state } = useContext(ExportReportContext)
  const { scheduleOption } = state
  const [subcomponent, setSubcomponent] = useState<ReactElement | undefined>(
    getScheduleComponent(scheduleOption)
  )

  useEffect(() => {
    setSubcomponent(getScheduleComponent(scheduleOption))
  }, [scheduleOption])

  return (
    <form
      onSubmit={e => onSubmit(e, state, onCancel)}
      className="form"
      autoComplete="off"
    >
      <div>
        <div className="form__heading">
          <h1>Export report</h1>
        </div>
        <ReportName />
        <ReportFormat />
        <ReportEmail />
        <ReportScheduleOption />
        {subcomponent}
      </div>
      <div className="form__controls">
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
