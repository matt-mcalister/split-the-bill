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


class TransactionItem extends React.Component {

  componentWillMount(){
    this.calulateCropPoints()
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
      <View style={[styles.column, styles.fullScreen]}>
        <View style={{flex: 3, ...styles.centered}}>
          <TextInput
          onChangeText={this.props.handleChangeText}
          value={this.props.lineAmount.text}
          style={{borderColor: 'gray', borderWidth: 1, textAlign: "center", ...styles.medium}}
          />
          <TextInput
            onChangeText={this.props.handleChangePrice}
            value={`${this.props.lineAmount.data}`}
            keyboardType="numeric"
            style={{borderColor: 'gray', borderWidth: 1, textAlign: "center", ...styles.xlarge}}
          />
        </View>
        {this.props.isFocused && <CroppedPhoto
          style={{flex: 1}}
          source={this.props.receiptImage}
          cropTop={this.cropTop}
          cropLeft={this.cropLeft}
          cropWidth={this.cropWidth}
          cropHeight={this.cropHeight}
          originalWidth={this.props.receiptImage.width}
          originalHeight={this.props.receiptImage.height} />}
        <View style={{flex: 3}}>
          {peopleIds.map(id => {
            let selected = this.props.peopleIds.includes(id)
            return (
              <PersonIcon
                key={id}
                person={this.props.people[id]}
                selected={selected}
                handlePress={selected ? () => this.props.removePerson(id) : () => this.props.addPerson(id)}
              />
            )
          })}
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

export default connect(mapStateToProps)(TransactionItem)
