import React from "react"
import Avatar from "./Avatar"
import { useSiteMetadata } from "../hooks/useSiteMetadata"

const Bio = ({ postDate, postTimeToRead }) => {
  const { author, description } = useSiteMetadata()

  return (
    <section className="bio flex">
      <Avatar />
      <div className="bio-right">
        <span>{author}</span>
        <span className="post-date">
          <small className="detail">
            {postDate && postTimeToRead ? (
              <span>
                {postDate} • {postTimeToRead} min read
              </span>
            ) : (
              <span>{description}</span>
            )}
          </small>
        </span>
      </div>
    </section>
  )
}

export default Bio
