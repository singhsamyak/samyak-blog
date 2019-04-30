import React from "react"
import { Link } from "gatsby"
import Image from "gatsby-image"
import get from "lodash/get"
import { useAvatar } from "../hooks/useAvatar"

const Avatar = ({ avatarSize = 50 }) => {
  const { avatar } = useAvatar()

  return (
    <div className="avatar">
      <Link style={{ boxShadow: "none", outline: "0" }} to="/">
        <Image
          fixed={get(avatar, "childImageSharp.fixed")}
          style={{
            display: `inline-block`,
            marginRight: 0,
            marginBottom: 0,
            borderRadius: `100%`,
            minWidth: avatarSize,
            width: avatarSize,
            height: avatarSize,
          }}
          imgStyle={{
            borderRadius: `100%`,
          }}
        />
      </Link>
    </div>
  )
}

export default Avatar
