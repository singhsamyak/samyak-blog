import React from "react"
import { ViewStream, ViewHeadline } from "@material-ui/icons"

const ViewToggle = ({ viewMode, onChange }) => {
  const onClick = viewType => () => {
    onChange(viewType)
  }

  return (
    <div className="flex">
      <div className="view-mode">
        <button
          onClick={onClick("compact")}
          className={` ${viewMode === "compact" ? "selected" : ""}`}
        >
          <ViewHeadline />
        </button>
        <button
          onClick={onClick("compact")}
          className={`${viewMode === "verbose" ? "selected" : ""}`}
        >
          <ViewStream />
        </button>
      </div>
    </div>
  )
}

export default ViewToggle
