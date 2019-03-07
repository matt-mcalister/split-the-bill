import React from "react"
import {
  TouchableOpacity,
  Text
} from "react-native"

const PersonIcon = ({ handlePress, person }) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
    >
      <Text>
        {person.name}
      </Text>
    </TouchableOpacity>
  )
}

export default PersonIcon
