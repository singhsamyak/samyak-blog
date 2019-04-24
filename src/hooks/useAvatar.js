import { useStaticQuery } from "gatsby"

const AvatarQuery = graphql`
  query AvatarQuery {
    avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
      childImageSharp {
        fixed(width: 200, height: 200) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

export const useAvatar = () => useStaticQuery(AvatarQuery)
