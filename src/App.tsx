import React, { ReactElement, useState } from "react"
import "./App.css"
import Button from "./components/BaseButton"
import ExportReportContextProvider from "./components/export-report/ExportReportContextProvider"
import ExportReportModal from "./components/export-report/ExportReportModal"

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const closeModal = () => setIsModalOpen(false)
  const openModal = () => setIsModalOpen(true)

  const [modal, setModal] = useState<ReactElement>(
    <ExportReportContextProvider>
      <ExportReportModal onCancel={closeModal} />
    </ExportReportContextProvider>
  )

  return (
    <div className="app">
      <div id="modal" className="modal">
        {isModalOpen && modal}
      </div>
      <Button onClick={openModal}>Export</Button>
    </div>
  )
}

export default App
