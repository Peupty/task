import React, { useContext } from "react"
import { ExportReportContext } from "./context"

const ReportEmail: React.FC<{}> = () => {
  const { dispatch } = useContext(ExportReportContext)

  return (
    <fieldset className="form__field">
      <span className="label">
        Email to
      </span>
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
