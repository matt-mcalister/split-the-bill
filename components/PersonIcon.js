import React from "react"
import {
  TouchableOpacity,
  Text
} from "react-native"

const PersonIcon = ({ handlePress, person, selected }) => {
  let style = selected ? {backgroundColor: "green"} : {backgroundColor: "red"}
  return (
    <TouchableOpacity
      onPress={handlePress}
      style={style}
    >
      <Text style={{color: "white"}}>
        {person.name}
      </Text>
    </TouchableOpacity>
  )
}

export default PersonIcon
