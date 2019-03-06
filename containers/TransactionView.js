import React from "react"
import {
  View,
  Text,
  TextInput
} from "react-native"
import { connect } from "react-redux"
import styles from "../constants/Styles"


class TransactionView extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      peopleIds: [],
      price: `${props.lineAmount.data}`,
      text: props.lineAmount.text
    }
  }

  handleNumberInput = (text) => {
    let price = parseFloat(text).toFixed(2)
    this.setState({price})
  }

  render(){
    console.log("PROPS: ", this.props);
    console.log("STATE: ", this.state);
    return (
      <View>
        <View>
          <TextInput
            onChangeText={this.handleNumberInput}
            value={this.state.price}
            keyboardType="decimal-pad"
            style={{borderColor: 'gray', borderWidth: 1}}
          />
          <TextInput
            onChangeText={(text) => this.setState({text})}
            value={this.state.text}
            style={{borderColor: 'gray', borderWidth: 1}}
          />
        </View>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    people: state.people,
    receiptImage: state.selectPhoto.photo
  }
}

export default connect(mapStateToProps)(TransactionView)
