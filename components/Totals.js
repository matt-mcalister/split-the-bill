import React from "react"
import {
  View,
  Text
} from "react-native"
import { connect } from "react-redux"
import styles, { screenWidth, screenHeight } from "../constants/Styles"
import ConfirmButtons from "./ConfirmButtons"


const Totals = (props) => {
  const people = {...props.people}
  Object.keys(people).forEach(pid => people[pid].total = 0)
  Object.keys(props.lineAmounts).forEach(lineId => {
    props.lineAmounts[lineId].peopleIds.forEach(id => {
      people[id].total += props.lineAmounts[lineId].data / props.lineAmounts[lineId].peopleIds.length
    })
  })
  console.log(people);
  return (
    <View style={[styles.column, styles.fullScreen]}>
      <Text>
        totals
      </Text>
      <ConfirmButtons style={{position: "absolute", bottom: 0, width: screenWidth, height: screenHeight / 10}}/>
    </View>
  )
}

const mapStateToProps = (state) => {
  return {
    people: state.people
  }
}

export default connect(mapStateToProps)(Totals)
