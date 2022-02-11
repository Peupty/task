import React, { useContext } from "react"
import { PropType } from "../../types/utility"
import { ExportReportContext, TReportContext } from "./context"

type TFormatInput = {
  label: string
  type: PropType<TReportContext, "format">
}

const formatTypes: TFormatInput[] = [
  { label: "Excel", type: "excel" },
  { label: "CSV", type: "csv" },
]

const ReportFormat: React.FC<{}> = () => {
  const { dispatch, ...state } = useContext(ExportReportContext)

  return (
    <fieldset id="format" className="form__field">
      <span className="label">Format</span>
      <div className="row">
        {formatTypes.map(({ label, type }) => (
          <div key={type}>
            <input
              type="radio"
              name="format"
              className="radio-button"
              id={`format-${type}`}
              checked={state.format === type}
              onChange={() =>
                dispatch({ type: "UPDATE_FORMAT", payload: type })
              }
            />
            <label htmlFor={`format-${type}`}>{label}</label>
          </div>
        ))}
      </div>
    </fieldset>
  )
}

export default ReportFormat
