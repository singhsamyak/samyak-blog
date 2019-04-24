import React from "react"
import { Link } from "gatsby"
import Avatar from "../avatar/Avatar"
import ThemeToggle from "../toggle/ThemeToggle"
import { useTheme } from "../../hooks/useTheme"
import "./layout.scss"

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
    <header>
      <div className="space-between">
        <div>
          <h1>
            <Link style={LinkInlineStyles} to={`/`}>
              {title}
            </Link>
          </h1>
          <span>{description}</span>
          <p className="last-active">
            <span className="detail">Last published {lastActive} days ago</span>
          </p>
        </div>
        <Avatar avatarSize={100} withHalo />
      </div>
    </header>
  )

  const renderTitleOnly = () => (
    <header className="title-only">
      <div className="space-between">
        <h3>
          <Link style={LinkInlineStyles} to={`/`}>
            <span aria-label="home emoji" role="img" className="emoji-left">
              🏡
            </span>
            {title}
          </Link>
        </h3>
      </div>
    </header>
  )

  return (
    <section className={`layout-container ${theme}`}>
      <div className="layout">
        {isHome ? renderHeader() : renderTitleOnly()}
        <ThemeToggle
          theme={theme}
          onToggle={toggleTheme}
          style={isHome ? { float: `left` } : null}
        />
        <main>{children}</main>
        <footer />
      </div>
    </section>
  )
}

export default Layout
