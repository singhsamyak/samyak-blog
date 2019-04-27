import React from "react"
import { Link } from "gatsby"

const Posts = ({ isCompactView, posts }) => {
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

  return <section>{renderPosts(posts)}</section>
}

export default Posts
