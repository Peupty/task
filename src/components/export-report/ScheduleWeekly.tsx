import React, { useContext, useEffect, useState } from "react"
import { WEEKDAYS } from "../../constants/weekdays"
import { ExportReportContext } from "./context"

const ScheduleWeekly: React.FC<{}> = () => {
  const { dispatch } = useContext(ExportReportContext)
  const [datetime, setDatetime] = useState({ day: "", hour: "" })

  useEffect(() => {
    dispatch({ type: "UPDATE_DATE", payload: datetime })
  }, [datetime])

  return (
    <fieldset className="form__field" data-testid="weekly">
      <span className="label">Every</span>
      <select
        name="date"
        id="date"
        onChange={e => setDatetime({ ...datetime, day: e.target.value })}
      >
        {WEEKDAYS.map(day => (
          <option value={day} key={day}>
            {day}
          </option>
        ))}
      </select>
      <span className="mx-4">at</span>
      <input
        type="time"
        name="time"
        id="time"
        required
        onChange={e => setDatetime({ ...datetime, hour: e.target.value })}
      />
    </fieldset>
  )
}

export default ScheduleWeekly
