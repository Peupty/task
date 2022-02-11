import React, { useContext } from "react"
import { ExportReportContext } from "./context"

const ScheduleDaily: React.FC<{}> = () => {
  const { dispatch } = useContext(ExportReportContext)
  return (
    <fieldset>
      <span>Everyday at</span>
      <input
        type="time"
        name="time"
        id="time"
        required
        onChange={e => {
          dispatch({
            type: "UPDATE_DATE",
            payload: { day: "", hour: e.target.value },
          })
        }}
      />
    </fieldset>
  )
}

export default ScheduleDaily
