import React from "react"
import styles, { screenWidth } from "../constants/Styles"
import {
  TouchableOpacity,
  Text
} from "react-native"

const PersonIcon = ({ handlePress, person, selected }) => {
  let width = (screenWidth / 4) - 5
  let color = selected ? {backgroundColor: "green"} : {backgroundColor: "red"}
  return (
    <TouchableOpacity
      onPress={handlePress}
      style={[color, {width: width, borderRadius: width, margin: 2, height: width, alignItems: "center", justifyContent: "center"}]}
    >
      <Text style={{color: "white", ...styles.small}}>
        {person.name}
      </Text>
    </TouchableOpacity>
  )
}

export default PersonIcon
