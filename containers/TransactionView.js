import React from "react"
import {
  View,
  Text
} from "react-native"


class TransactionView extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      peopleIds: []
    }
  }

  render(){
    console.log(this.props);
    return (
      <View>
        <Text>
          some shit
        </Text>
      </View>
    )
  }
}
