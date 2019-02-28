import React from 'react';
import { connect } from "react-redux"

import PhotoUpload from "../containers/PhotoUpload"


class HomeScreen extends React.Component {


  render() {
    console.log(this.props);
    return (
      <PhotoUpload />
    );
  }
}

export default connect(state => state)(HomeScreen)
