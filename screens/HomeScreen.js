import React from 'react';
import { Text } from 'react-native';
import { connect } from "react-redux"

import PhotoUpload from "../containers/PhotoUpload"
import AddPeople from "../containers/AddPeople"
import TransactionView from "../containers/TransactionView"

class HomeScreen extends React.Component {


  render() {
    let lineAmount = this.props.lineAmounts && this.props.lineAmounts.find(el => !el.peopleIds)
    if (!this.props.photoSelected) {
      return <PhotoUpload />
    } else if (!this.props.peopleSelected) {
      return <AddPeople />
    } else if (lineAmount) {
      return <TransactionView lineAmount={lineAmount} />
    }
  }
}

const mapStateToProps = (state) => {
  return {
    photoSelected: !!state.selectPhoto.photo,
    peopleSelected: !!Object.keys(state.people)[0],
    lineAmounts: state.selectPhoto.lineAmounts
  }
}

export default connect(mapStateToProps)(HomeScreen)
