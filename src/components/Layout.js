import React from "react"
import { Link } from "gatsby"
import ThemeToggle from "./ThemeToggle"
import { useTheme } from "../hooks/useTheme"

const LinkInlineStyles = {
  boxShadow: `none`,
  textDecoration: `none`,
  color: `inherit`,
}

const Layout = ({ location, title, description, children, lastActive }) => {
  const [theme, toggleTheme] = useTheme()

  const renderHeader = () => (
    <header className="title-only fixed-header">
      <div className="space-between header-container">
        <div className="flex">
          <h1>
            <Link style={LinkInlineStyles} to={`/`}>
              {title}
            </Link>
          </h1>
        </div>
        <div className="theme-toggle-home">
          <ThemeToggle theme={theme} onToggle={toggleTheme} />
        </div>
      </div>
    </header>
  )

  return (
    <section className={`layout-container ${theme}`}>
      {renderHeader()}
      <div className="layout">
        <main>{children}</main>
        <footer />
      </div>
    </section>
  )
}

export default Layout
