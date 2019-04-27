import React from "react"
import Toggle from "./Toggle"

const Dark = (
  <span role="img" aria-label="moon emoji">
    🌙
  </span>
)

const Light = (
  <span role="img" aria-label="sun emoji">
    🌞
  </span>
)

const ThemeToggle = ({ style, theme, onToggle }) => (
  <div style={style}>
    <Toggle
      onToggle={onToggle}
      left={Dark}
      right={Light}
      isChecked={theme === "dark" ? true : false}
    />
  </div>
)

export default ThemeToggle
