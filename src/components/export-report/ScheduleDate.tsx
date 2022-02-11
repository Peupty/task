import React, { useContext, useEffect, useState } from "react"
import { ExportReportContext } from "./context"

const ScheduleDate: React.FC<{}> = () => {
  const { dispatch } = useContext(ExportReportContext)
  const [datetime, setDate] = useState({ day: "", hour: "" })

  useEffect(() => {
    dispatch({ type: "UPDATE_DATE", payload: datetime })
  }, [datetime])

  return (
    <fieldset>
      <div className="label">Date</div>
      <input
        type="date"
        name="date"
        id="date"
        required
        onChange={e => {
          setDate({ ...datetime, day: e.target.value })
        }}
      />
      <span>at</span>
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
