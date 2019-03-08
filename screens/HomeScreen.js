import React from 'react';
import { Text, ScrollView } from 'react-native';
import { connect } from "react-redux"

import PhotoUpload from "../containers/PhotoUpload"
import AddPeople from "../containers/AddPeople"
import TransactionView from "../containers/TransactionView"
import Loading from "../components/Loading"

class HomeScreen extends React.Component {


  render() {
    if (!this.props.photoSelected) {
      return <PhotoUpload />
    } else if (!this.props.peopleSelected) {
      return <AddPeople />
    } else if (this.props.lineAmounts) {
      return <TransactionView />
    } else {
      return <Loading />
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
