import React, { useContext } from "react"
import { ExportReportContext } from "./context"

const ReportEmail: React.FC<{}> = () => {
  const { dispatch } = useContext(ExportReportContext)

  return (
    <fieldset>
      <label htmlFor="email" className="label">
        Email to
      </label>
      <input
        type="email"
        placeholder="client@company.com"
        id="email"
        required
        onChange={e =>
          dispatch({ type: "UPDATE_EMAIL", payload: e.target.value })
        }
      />
    </fieldset>
  )
}

export default ReportEmail
