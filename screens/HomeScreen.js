import React from 'react';
import { Text } from 'react-native';
import { connect } from "react-redux"

import PhotoUpload from "../containers/PhotoUpload"


class HomeScreen extends React.Component {


  render() {
    console.log(this.props);
    if (!this.props.selectedPhoto) {
      return (
        <PhotoUpload />
      );
    } else {
      return (
        <Text>yo</Text>
      )
    }
  }
}

const mapStateToProps = (state) => {
  return {
    selectedPhoto: state.selectPhoto.photo
  }
}

export default connect(mapStateToProps)(HomeScreen)
