import React from "react"
import {
  View,
  Text
} from "react-native"
import { connect } from "react-redux"
import styles, { screenWidth, screenHeight } from "../constants/Styles"
import ConfirmButtons from "./ConfirmButtons"


const Totals = (props) => {
  return (
    <View style={[styles.column, styles.fullScreen]}>
      <Text>
        totals page
      </Text>
      <ConfirmButtons style={{position: "absolute", bottom: 0, width: screenWidth, height: screenHeight / 10}}/>
    </View>
  )
}

const mapStateToProps = (state) => {
  return {
    foo: "bar"
  }
}

export default connect(mapStateToProps)(Totals)
