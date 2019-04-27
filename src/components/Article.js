import React from "react"
import get from "lodash/get"
import Bio from "./Bio"
import Layout from "./Layout"
import SEO from "./SEO"

const Post = props => {
  const post = get(props, "data.markdownRemark", null)
  const siteTitle = get(props, "data.site.siteMetadata.title", null)

  return (
    <Layout location={props.location} title={siteTitle}>
      <article>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />
        <h1>{post.frontmatter.title}</h1>
        <span className="post-description detail">
          {post.frontmatter.description}
        </span>
        <Bio
          postDate={post.frontmatter.date}
          postTimeToRead={post.timeToRead}
        />
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </article>
      <Bio />
    </Layout>
  )
}

export const PageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      timeToRead
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`
export default Post
