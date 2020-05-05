import React from "react"
import Avatar from "./Avatar"
import { useSiteMetadata } from "../hooks/useSiteMetadata"

const BioDescription = ({ description }) => (
  <span className="bio-description">
    <small className="post-metadata">{description}</small>
  </span>
)

const Bio = ({ postDate, postTimeToRead }) => {
  const { author, description } = useSiteMetadata()
  const postDescription =
    postDate && postTimeToRead
      ? `${postDate} • ${postTimeToRead} min read`
      : description

  return (
    <section className="bio flex">
      <Avatar avatarSize={45} />
      <div className="bio-right">
        <strong>{author}</strong>
        <BioDescription description={postDescription} />
      </div>
    </section>
  )
}

export default Bio
