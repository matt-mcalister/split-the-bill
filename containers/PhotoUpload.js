import React from "react"
import { connect } from "react-redux"
import {
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { ImagePicker, Permissions } from 'expo';
import PhotoSelectIcon from "../components/PhotoSelectIcon"
import styles from "../constants/Styles"



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
    console.log("some shit");
    Permissions.askAsync(Permissions.CAMERA_ROLL).then( ({permissions}) => {
      if (permissions.cameraRoll && permissions.cameraRoll.status === "granted"){
        ImagePicker.launchImageLibraryAsync(options).then(data => {
          this.setState({
            receiptImage: data.uri
          })
        })
      } else {
        debugger
      }
    })


  }

	render(){
    console.log("yo");
    console.log(this.props);
		return (
      <View style={[styles.column, styles.centered]}>
        <TouchableOpacity onPress={console.log}>
          <PhotoSelectIcon name="md-images" />
        </TouchableOpacity>
        <Text>OR</Text>
        <TouchableOpacity onPress={console.log}>
          <PhotoSelectIcon name="md-camera"/>
        </TouchableOpacity>
      </View>
    )
	}
}

export default connect(state => state)(PhotoUpload)
