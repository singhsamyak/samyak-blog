import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import get from "lodash/get"
import { formatDate } from "../utils/shortenMonth"

const Posts = ({ posts }) => {
  const renderPosts = posts =>
    posts.map(postItem => {
      const { node: post } = postItem
      const title = get(post, "frontmatter.title", "Untitled")
      const featuredImageFixed = get(
        post,
        "frontmatter.featuredImage.childImageSharp.fixed",
        null
      )

      const postMetadata = (
        <div className="post-metadata">
          <span
            dangerouslySetInnerHTML={{
              __html: formatDate(post.frontmatter.date) || "",
            }}
          />
          <span> • </span>
          <span
            dangerouslySetInnerHTML={{
              __html: `${post.timeToRead} min read` || "",
            }}
          />
        </div>
      )

      const postDescription = (
        <div
          className="post-description"
          dangerouslySetInnerHTML={{
            __html: post.frontmatter.description || "",
          }}
        />
      )

      return (
        <Link
          style={{ boxShadow: "none", color: "#2d3436", outline: "0" }}
          to={post.fields.slug}
          key={post.fields.slug}
        >
          <div className="post">
            {featuredImageFixed ? (
              <div className="post-featured-image">
                <Img
                  fixed={featuredImageFixed}
                  style={{
                    width: "100%",
                    maxHeight: 170,
                  }}
                />
              </div>
            ) : null}
            <div className="post-content">
              <div>
                <h2>{title}</h2>
                {postDescription}
              </div>
              {postMetadata}
            </div>
          </div>
        </Link>
      )
    })

  return <section className="all-posts">{renderPosts(posts)}</section>
}

export default Posts
