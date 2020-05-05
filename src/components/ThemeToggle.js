import React from "react"
import Toggle from "./Toggle"
import { WbSunny, Brightness3 } from "@material-ui/icons"

const ThemeToggle = ({ style, theme, onToggle }) => (
  <div style={style}>
    <Toggle onToggle={onToggle} isChecked={theme === "dark" ? true : false} />
  </div>
)

export default ThemeToggle
