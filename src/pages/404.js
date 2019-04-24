import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout/Layout"
import SEO from "../components/seo/SEO"

export default function({ data, location }) {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <section className="not-found-page">
        <SEO title="404: Not Found" />
        <h1>
          Not Found
          <span className="emoji-right" role="img" aria-label="monkey emoji">
            🙈
          </span>
        </h1>
        <p> This page does not exist. I'm sorry!</p>
      </section>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
