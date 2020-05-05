import React from "react"
import { graphql } from "gatsby"
import get from "lodash/get"
import Layout from "../components/Layout"
import Posts from "../components/Posts"
import SEO from "../components/SEO"

export default function(props) {
  const { data } = props
  const siteTitle = get(data, "site.siteMetadata.title")
  const siteDescription = get(data, "site.siteMetadata.description")
  const posts = get(data, "allMarkdownRemark.edges")

  return (
    <Layout
      location={props.location}
      title={siteTitle}
      description={siteDescription}
    >
      <SEO
        title="Samyak"
        keywords={[`blog`, `gatsby`, `javascript`, `react`]}
      />
      <Posts posts={posts} />
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
            featuredImage {
              childImageSharp {
                fixed {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    }
  }
`
