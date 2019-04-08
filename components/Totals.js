import React from "react"
import {
  View,
  Text,
  TextInput,
  TouchableOpacity
} from "react-native"
import { connect } from "react-redux"
import styles, { screenWidth, screenHeight } from "../constants/Styles"
import ConfirmButtons from "./ConfirmButtons"


class Totals extends React.Component {

  state = {
    tip: "20"
  }

  onRemove = () => {
    this.setState({
      tip: 0
    })
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
          <View style={{flex: 2, flexDirection: "row", flexWrap: "wrap", width: screenWidth}}>
          {
            Object.keys(people).map(id => {
              let person = people[id]
              return (
                <View key={id} style={{width: width, borderRadius: width, margin: 2, height: width, alignItems: "center", justifyContent: "center", backgroundColor: "blue"}}>
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
          <View style={{flex: 1, flexDirection: "row", alignItems: "center", justifyContent: "flex-start"}}>
            {this.state.tip !== 0 ? (
            <React.Fragment>
              <Text>
                Tip Percentage:
              </Text>
              <TextInput
                onChangeText={(tip) => this.setState({tip})}
                value={this.state.tip}
                keyboardType="numeric"
                style={{borderColor: 'gray', borderWidth: 1, textAlign: "center", ...styles.small, minWidth: screenWidth / 2, maxHeight: styles.small.fontSize}}
              >
              </TextInput>
              <TouchableOpacity onPress={this.onRemove} style={{...styles.centered, marginLeft: 2, marginRight: 2}}>
      					<Text style={{backgroundColor: "red", color: "white"}}>X</Text>
      				</TouchableOpacity>
            </React.Fragment>
          ) :
            <Text>
              Add tip
            </Text>
          }
          </View>
          <View style={{flex: 1}}>
            <TouchableOpacity onPress={console.log} style={{width: screenWidth * .9, backgroundColor: "green", ...styles.centered}}>
              <Text style={{color: "white", ...styles.small, textAlign: "center"}}>Scan Another Receipt</Text>
            </TouchableOpacity>
          </View>
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
