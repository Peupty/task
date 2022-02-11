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
            checked={scheduleOption === type}
          />
          <label htmlFor={type}>{label}</label>
        </div>
      ))}
    </fieldset>
  )
}

export default ReportScheduleOption
