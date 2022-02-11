import React, { ReactElement, useContext, useEffect, useState } from "react"
import Button from "../BaseButton"
import { ExportReportContext, TReportContext } from "./context"
import { getScheduleComponent } from "./getScheduleComponent"
import ReportEmail from "./ReportEmail"
import ReportFormat from "./ReportFormat"
import ReportName from "./ReportName"
import ReportScheduleOption from "./ReportScheduleOption"

type TExportReportModalProps = {
  onCancel: () => void
  onSubmit: (
    e: React.FormEvent<HTMLFormElement>,
    state: Omit<TReportContext, "dispatch">,
    onCancel: Function
  ) => void
}

const ExportReportModal: React.FC<TExportReportModalProps> = ({
  onCancel,
  onSubmit,
}) => {
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
      data-testid="export-report"
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
        <Button type="button" onClick={onCancel} data-testid="cancel">
          Cancel
        </Button>
        <Button type="submit" variant="dark" data-testid="submit">
          OK
        </Button>
      </div>
    </form>
  )
}

export default ExportReportModal
