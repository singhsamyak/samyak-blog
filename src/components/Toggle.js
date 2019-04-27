import React, { useState } from "react"

const Toggle = ({ onToggle, left, right, isChecked }) => {
  const [isToggled, setIsToggled] = useState(isChecked)
  const toggleClass = isToggled ? "toggle toggle-checked" : "toggle"

  const toggle = () => {
    setIsToggled(!isToggled)
    onToggle()
  }

  return (
    <div className="toggle-container" onClick={toggle} tabIndex="0">
      <button className={toggleClass} onClick={toggle} />
      <div className="toggle-track">
        <div className="toggle-option">{left}</div>
        <div className="toggle-option">{right}</div>
      </div>
    </div>
  )
}

export default Toggle
