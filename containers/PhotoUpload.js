import React from "react"
import { connect } from "react-redux"
import {
  Text,
  TouchableOpacity,
  View,
  Image
} from 'react-native';
import { ImagePicker, Permissions } from 'expo';
import PhotoSelectIcon from "../components/PhotoSelectIcon"
import styles from "../constants/Styles"
import { selectPhoto } from "../redux/actions/selectPhoto"



class PhotoUpload extends React.Component {
	state = {
    uploadChoice: null
  }


  handleGetPhotos = () => {
    const options = {
      mediaTypes: "Images",
      quality: 1,
      base64: true,
      exif: true,
    }
    Permissions.askAsync(Permissions.CAMERA_ROLL).then( ({permissions}) => {
      if (permissions.cameraRoll && permissions.cameraRoll.status === "granted"){
        ImagePicker.launchImageLibraryAsync(options)
          .then(data => {
            this.setState({
              uploadChoice: data
            })
          })
      }
    })
  }

  handleTakePhoto = () => {
    const options = {
      allowsEditing: false,
      quality: 1,
      base64: true,
      exif: true,
    }
    Permissions.askAsync(Permissions.CAMERA).then( ({permissions}) => {
      if (permissions.camera && permissions.camera.status === "granted"){
        ImagePicker.launchCameraAsync(options)
          .then(data => {
            this.setState({
              uploadChoice: data
            })
          })
      }
    })
  }

	render(){
    if (this.state.uploadChoice) {
      return (<Image source={{uri: this.state.uploadChoice.uri}} style={[styles.fullScreen]}/>)
    } else {
      return (
        <View style={[styles.column, styles.centered]}>
          <TouchableOpacity onPress={this.handleGetPhotos}>
            <PhotoSelectIcon name="md-images" />
          </TouchableOpacity>
          <Text>OR</Text>
          <TouchableOpacity onPress={this.handleTakePhoto}>
            <PhotoSelectIcon name="md-camera"/>
          </TouchableOpacity>
        </View>
      )
    }
  }
}

const mapStateToProps = state => {
  return {
    selectedPhoto: state.selectPhoto.photo
  }
}

const mapDispatchToProps = dispatch => {
  return {
    selectPhoto: (photoObj) => dispatch(selectPhoto(photoObj))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PhotoUpload)
