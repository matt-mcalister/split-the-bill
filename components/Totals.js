import React from "react"
import {
  View,
  Text,
  TextInput
} from "react-native"
import { connect } from "react-redux"
import styles, { screenWidth, screenHeight } from "../constants/Styles"
import ConfirmButtons from "./ConfirmButtons"


class Totals extends React.Component {

  state = {
    tip: "20"
  }

  render() {
      let multiplier = (this.state.tip / 100) + 1
      const people = {...this.props.people}
      Object.keys(people).forEach(pid => people[pid].total = 0)
      Object.keys(this.props.lineAmounts).forEach(lineId => {
        this.props.lineAmounts[lineId].peopleIds.forEach(id => {
          people[id].total += this.props.lineAmounts[lineId].data / this.props.lineAmounts[lineId].peopleIds.length
        })
      })
      let width = (screenWidth / 4) - 5
      return (
        <View style={[styles.column, styles.fullScreen]}>
          <View style={{flex: 4, flexDirection: "row", flexWrap: "wrap", width: screenWidth, height: (screenWidth * 4 / 3)}}>
          {
            Object.keys(people).map(id => {
              let person = people[id]
              return (
                <View key={id} style={{width: width, borderRadius: width, margin: 2, height: width, alignItems: "center", justifyContent: "center"}}>
                <Text style={[styles.small]}>
                {person.name}
                </Text>
                <Text style={[styles.small]}>
                ${(person.total * multiplier).toFixed(2)}
                </Text>
                </View>
              )
            })
          }
          </View>
        <View style={{flex: 3}}>
          <Text>
            Tip Percentage:
          </Text>
          <TextInput
          onChangeText={(tip) => this.setState({tip})}
          value={this.state.tip}
          keyboardType="numeric"
          style={{borderColor: 'gray', borderWidth: 1, textAlign: "center", ...styles.small}}
          >
          </TextInput>
        </View>
        <ConfirmButtons style={{position: "absolute", bottom: 0, width: screenWidth, height: screenHeight / 10}}/>
        </View>
      )

  }
}


const mapStateToProps = (state) => {
  return {
    people: state.people
  }
}

export default connect(mapStateToProps)(Totals)
