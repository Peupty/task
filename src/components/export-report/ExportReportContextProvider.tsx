import React, { ReactElement, useReducer } from "react"
import { ExportReportContext } from "./context"
import { initialState, reducer } from "./reducer"

type TProps = {
  children: ReactElement
}

const ExportReportContextProvider: React.FC<TProps> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <ExportReportContext.Provider value={{ ...state, dispatch }}>
      {children}
    </ExportReportContext.Provider>
  )
}

export default ExportReportContextProvider
