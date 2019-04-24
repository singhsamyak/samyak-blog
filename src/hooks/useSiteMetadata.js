import { useStaticQuery, graphql } from "gatsby"

const SiteQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`

export const useSiteMetadata = () => {
  const { site } = useStaticQuery(SiteQuery)
  return site.siteMetadata
}
