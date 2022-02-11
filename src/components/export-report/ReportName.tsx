import React, { useContext } from "react"
import { ExportReportContext } from "./context"

const ReportName: React.FC<{}> = () => {
  const { dispatch } = useContext(ExportReportContext)

  return (
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
  )
}

export default ReportName