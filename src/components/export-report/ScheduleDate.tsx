import React, { useContext, useEffect, useState } from "react"
import { ExportReportContext } from "./context"

const ScheduleDate: React.FC<{}> = () => {
  const { dispatch } = useContext(ExportReportContext)
  const [datetime, setDate] = useState({ day: "", hour: "" })

  useEffect(() => {
    dispatch({ type: "UPDATE_DATE", payload: datetime })
  }, [datetime])

  return (
    <fieldset className="form__field" data-testid="date">
      <span className="label">Date</span>
      <input
        type="date"
        name="date"
        id="date"
        required
        onChange={e => {
          setDate({ ...datetime, day: e.target.value })
        }}
      />
      <span className="mx-4">at</span>
      <input
        type="time"
        name="time"
        id="time"
        required
        onChange={e => {
          setDate({ ...datetime, hour: e.target.value })
        }}
      />
    </fieldset>
  )
}

export default ScheduleDate
