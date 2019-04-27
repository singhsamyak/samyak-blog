import React from "react"
import Toggle from "./Toggle"

const Compact = (
  <span role="img" aria-label="rolled newspaper emoji">
    🗞
  </span>
)

const Verbose = (
  <span role="img" aria-label="newspaper emoji">
    📰
  </span>
)

const ViewToggle = ({ viewMode, onToggle }) => (
  <div className="float-right">
    <Toggle
      onToggle={onToggle}
      left={Compact}
      right={Verbose}
      isChecked={viewMode === "compact" ? true : false}
    />
  </div>
)

export default ViewToggle
