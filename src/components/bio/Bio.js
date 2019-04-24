import React from "react"
import Avatar from "../avatar/Avatar"
import { useSiteMetadata } from "../../hooks/useSiteMetadata"
import "./bio.scss"

const Bio = ({ postDate, postTimeToRead }) => {
  const { author, description } = useSiteMetadata()

  return (
    <section className="bio flex">
      <Avatar />
      <div>
        <strong>{author}</strong>
        <span className="post-date">
          {postDate && postTimeToRead ? (
            <small>
              {postDate} • {postTimeToRead} min read
            </small>
          ) : (
            <small>{description}</small>
          )}
        </span>
      </div>
    </section>
  )
}

export default Bio
