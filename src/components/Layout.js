import React from "react"
import { Link } from "gatsby"
import Avatar from "./Avatar"
import ThemeToggle from "./ThemeToggle"
import { useTheme } from "../hooks/useTheme"

const LinkInlineStyles = {
  boxShadow: `none`,
  textDecoration: `none`,
  color: `inherit`,
}

const Layout = ({ location, title, description, children, lastActive }) => {
  const [theme, toggleTheme] = useTheme()
  const rootPath = `${__PATH_PREFIX__}/`
  const isHome = location.pathname === rootPath

  const renderHeader = () => (
    <header className="title-only fixed-header">
      <div className="space-between header-container">
        <div className="flex">
          {isHome ? <Avatar /> : null}
          <h3 className={`${isHome ? "blog-title" : ""}`}>
            <Link style={LinkInlineStyles} to={`/`}>
              {title}
            </Link>
          </h3>
        </div>
        <div className={`${isHome ? "theme-toggle-home" : ""}`}>
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
