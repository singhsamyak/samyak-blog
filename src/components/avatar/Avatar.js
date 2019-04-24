import React from "react"
import Image from "gatsby-image"
import get from "lodash/get"
import { useAvatar } from "../../hooks/useAvatar"
import "./avatar.scss"

const Avatar = ({ avatarSize = 50, withHalo = false }) => {
  const { avatar } = useAvatar()

  return (
    <div className="avatar">
      <Image
        fixed={get(avatar, "childImageSharp.fixed")}
        style={{
          border: withHalo ? `2px solid #49b98a` : null,
          padding: withHalo ? 5 : 0,
          marginRight: 0,
          marginBottom: 0,
          borderRadius: `100%`,
          minWidth: avatarSize,
          width: avatarSize,
          height: avatarSize,
        }}
        imgStyle={{
          padding: 5,
          borderRadius: `100%`,
        }}
      />
    </div>
  )
}

export default Avatar
