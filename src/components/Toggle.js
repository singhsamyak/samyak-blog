import React, { useState } from "react"

const Toggle = ({ onToggle, isChecked }) => {
  const [isToggled, setIsToggled] = useState(isChecked)
  const toggleClass = isToggled ? "toggle toggle-checked" : "toggle"

  const toggle = () => {
    setIsToggled(!isToggled)
    onToggle()
  }

  return (
    <div className="toggle-container" onClick={toggle} tabIndex="0">
      <button className={toggleClass} onClick={toggle} />
      <div className="toggle-track" />
    </div>
  )
}

export default Toggle
