import React from "react"
import {
  View,
  Text,
  TextInput
} from "react-native"
import { connect } from "react-redux"
import styles from "../constants/Styles"
import CroppedPhoto from "../components/CroppedPhoto"
import PersonIcon from "../components/PersonIcon"


class TransactionView extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      peopleIds: [],
      price: `${props.lineAmount.data}`,
      text: props.lineAmount.text
    }
    this.calulateCropPoints()
  }

  handleNumberInput = (text) => {
    let price = parseFloat(text).toFixed(2)
    this.setState({price})
  }

  calulateCropPoints = () => {
    let maxX = this.props.lineAmount.regions[0].x
    let minX = this.props.lineAmount.regions[0].x
    let maxY = this.props.lineAmount.regions[0].y
    let minY = this.props.lineAmount.regions[0].y
    this.props.lineAmount.regions.forEach(coords => {
      coords.forEach(({ x, y }) => {
        maxX = maxX > x ? maxX : x
        minX = minX < x ? minX : x
        maxY = maxY > y ? maxY : y
        minY = minY < y ? minY : y
      })
    })
    this.cropTop = minY
    this.cropLeft = minX
    this.cropWidth = maxX - minX
    this.cropHeight = maxY - minY
  }

  render(){
    let peopleIds = Object.keys(this.props.people)
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
        <CroppedPhoto
          source={this.props.receiptImage}
          cropTop={this.cropTop}
          cropLeft={this.cropLeft}
          cropWidth={this.cropWidth}
          cropHeight={this.cropHeight}
          originalWidth={this.props.receiptImage.width}
          originalHeight={this.props.receiptImage.height} />
        <View>
          {peopleIds.map(id => <PersonIcon key={id} person={this.props.people[id]} handlePress={console.log}/>)}
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
