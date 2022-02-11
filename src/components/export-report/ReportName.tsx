import React, { useContext } from "react"
import { ExportReportContext } from "./context"

const ReportName: React.FC<{}> = () => {
  const { dispatch } = useContext(ExportReportContext)

  return (
    <fieldset className="form__field">
      <span className="label">
        Report name
      </span>
      <input
        type="text"
        name="report-name"
        id="report-name"
        placeholder="Shareablee Report"
        onChange={e =>
          dispatch({ type: "UPDATE_NAME", payload: e.target.value })
        }
        required
      />
    </fieldset>
  )
}

export default ReportName