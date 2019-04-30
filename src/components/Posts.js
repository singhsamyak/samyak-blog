import React from "react"
import { Link } from "gatsby"
import ViewToggle from "../components/ViewToggle"
import { useCompactView } from "../hooks/useCompactView"

const Posts = ({ posts }) => {
  const [viewMode, toggleViewMode] = useCompactView()
  const isCompactView = viewMode === "compact"

  const renderPosts = posts =>
    posts.map(postItem => {
      const { node: post } = postItem
      const title = post.frontmatter.title || "Untitled"
      const postClass = isCompactView ? "post post-compact" : "post"

      return (
        <Link
          style={{ boxShadow: "none", color: "#2d3436", outline: "0" }}
          to={post.fields.slug}
          key={post.fields.slug}
        >
          <div className={postClass}>
            <h2>{title}</h2>
            {isCompactView ? null : (
              <div>
                <small>
                  {post.frontmatter.date} • {post.timeToRead} min read
                </small>
                <span
                  className="detail"
                  dangerouslySetInnerHTML={{
                    __html: post.frontmatter.description || post.excerpt,
                  }}
                />
              </div>
            )}
          </div>
        </Link>
      )
    })

  return (
    <section className="all-posts">
      <div className="space-between toggles">
        <ViewToggle viewMode={viewMode} onToggle={toggleViewMode} />
      </div>
      {renderPosts(posts)}
    </section>
  )
}

export default Posts
