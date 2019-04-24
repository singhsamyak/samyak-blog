import React from "react"
import { graphql } from "gatsby"
import get from "lodash/get"
import Layout from "../components/layout/Layout"
import Posts from "../components/posts/Posts"
import SEO from "../components/seo/SEO"
import ViewToggle from "../components/toggle/ViewToggle"
import { useCompactView } from "../hooks/useCompactView"

export default function(props) {
  const [viewMode, toggleViewMode] = useCompactView()

  const { data } = props
  const siteTitle = get(data, "site.siteMetadata.title")
  const siteDescription = get(data, "site.siteMetadata.description")
  const posts = get(data, "allMarkdownRemark.edges")

  const lastPostDate = new Date(posts[0].node.frontmatter.date)
  const today = new Date()
  const lastActive = Math.floor(
    (today.getTime() - lastPostDate.getTime()) / 1000 / 60 / 60 / 24
  )

  return (
    <Layout
      location={props.location}
      title={siteTitle}
      description={siteDescription}
      lastActive={lastActive}
    >
      <SEO
        title="Samyak"
        keywords={[`blog`, `gatsby`, `javascript`, `react`]}
      />
      <div className="float-right-container">
        <ViewToggle viewMode={viewMode} onToggle={toggleViewMode} />
      </div>
      <Posts posts={posts} isCompactView={viewMode === "compact"} />
    </Layout>
  )
}

export const PageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          timeToRead
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
