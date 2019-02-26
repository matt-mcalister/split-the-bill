import React from 'react';
import { Icon } from "expo"

const PhotoSelectIcon = ({ name }) => {
  return (
    <Icon.Ionicons
      name={name}
      size={100}
      color="grey"
    />
  )
}

export default PhotoSelectIcon
