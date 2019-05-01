import React from "react"
import { Link } from "gatsby"
import Bio from "./Bio"
import ViewMode from "./ViewMode"
import { useCompactView } from "../hooks/useCompactView"

const Posts = ({ posts }) => {
  const [viewMode, toggleViewMode] = useCompactView()
  const isCompactView = viewMode === "compact"

  const renderPosts = posts =>
    posts.map(postItem => {
      const { node: post } = postItem
      const title = post.frontmatter.title || "Untitled"

      return (
        <Link
          style={{ boxShadow: "none", color: "#2d3436", outline: "0" }}
          to={post.fields.slug}
          key={post.fields.slug}
        >
          <div className="post">
            {isCompactView ? null : (
              <Bio
                bioDescription={`${post.frontmatter.date} • ${
                  post.timeToRead
                } min read`}
              />
            )}
            <h2>{title}</h2>
            <div>
              <span
                className="detail"
                dangerouslySetInnerHTML={{
                  __html: post.frontmatter.description || "",
                }}
              />
              {isCompactView ? null : (
                <p
                  className="post-excerpt"
                  dangerouslySetInnerHTML={{
                    __html: post.excerpt,
                  }}
                />
              )}
            </div>
          </div>
        </Link>
      )
    })

  return (
    <section className="all-posts">
      <ViewMode viewMode={viewMode} onChange={toggleViewMode} />
      {renderPosts(posts)}
    </section>
  )
}

export default Posts
