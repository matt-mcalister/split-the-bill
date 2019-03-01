import React from "react"
import { connect } from "react-redux"
import {
  Text,
  TouchableOpacity,
  View,
  Image,
  Button,
  Dimensions
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

  resetState = () => {
    this.setState({
      uploadChoice: null
    })
  }

	render(){
    if (this.state.uploadChoice) {
      console.log(this.state.uploadChoice);
      return (
        <View style={[styles.column, styles.stretch]}>
          <Image
            source={this.state.uploadChoice}
            style={{...styles.imageConfirm}}
            resizeMode="contain"
          />
          <View style={[styles.row, styles.confirmButtonsContainer]}>
            <TouchableOpacity
              style={[styles.confirmButtons, styles.cancelButton]}
              onPress={this.resetState}>
              <Text style={[styles.buttonText]}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.confirmButtons]}
              onPress={console.log}>
              <Text style={[styles.buttonText]}>Confirm</Text>
            </TouchableOpacity>
          </View>
        </View>
      )
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
