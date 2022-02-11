import React, { useContext } from "react"
import { PropType } from "../../types/utility"
import { ExportReportContext, TReportContext } from "./context"

type TScheduleInput = {
  label: string
  type: PropType<TReportContext, "scheduleOption">
}

const scheduleTypes: TScheduleInput[] = [
  { label: "No Repeat", type: "none" },
  { label: "Specific Date", type: "date" },
  { label: "Daily", type: "daily" },
  { label: "Weekly", type: "weekly" },
]

const ReportScheduleOption: React.FC<{}> = () => {
  const { dispatch, scheduleOption } = useContext(ExportReportContext)

  return (
    <fieldset
      id="schedule"
      className="form__field"
      data-testid="form-schedule-option"
    >
      <span className="label">Schedule</span>
      <div className="row">
        {scheduleTypes.map(({ label, type }) => (
          <div key={type}>
            <input
              type="radio"
              name="schedule"
              className="radio-button"
              id={type}
              onChange={() =>
                dispatch({ type: "UPDATE_SCHEDULE_OPTION", payload: type })
              }
              checked={scheduleOption === type}
            />
            <label htmlFor={type}>{label}</label>
          </div>
        ))}
      </div>
    </fieldset>
  )
}

export default ReportScheduleOption
