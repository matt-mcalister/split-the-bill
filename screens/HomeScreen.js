import React from 'react';
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { WebBrowswer, Icon, ImagePicker, Permissions } from 'expo';

import { MonoText } from '../components/StyledText';
import PhotoSelectIcon from "../components/PhotoSelectIcon"
import PhotoList from "../components/PhotoList"


export default class HomeScreen extends React.Component {
  state = {
    receiptImage: null,
    photos: []
  }

  static navigationOptions = {
    header: null,
  };

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

  render() {
    console.log(this.state);
    return (
      <View style={styles.container}>
        {/* show pick image icon*/}
        <TouchableOpacity  style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <PhotoSelectIcon name="md-images" onPress={console.log}/>
        </TouchableOpacity>
        <Text>OR</Text>
        <TouchableOpacity onPress={console.log} style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <PhotoSelectIcon name="md-camera"/>
        </TouchableOpacity>
        {this.state.receiptImage && <Image source={{uri: this.state.receiptImage}} style={{width: 100, height: 100}}/>}
      </View>
    );
  }

  _maybeRenderDevelopmentModeWarning() {
    if (__DEV__) {
      const learnMoreButton = (
        <Text onPress={this._handleLearnMorePress} style={styles.helpLinkText}>
          Learn more
        </Text>
      );

      return (
        <Text style={styles.developmentModeText}>
          Development mode is enabled, your app will be slower but you can use useful development
          tools. {learnMoreButton}
        </Text>
      );
    } else {
      return (
        <Text style={styles.developmentModeText}>
          You are not in development mode, your app will run at full speed.
        </Text>
      );
    }
  }

  _handleLearnMorePress = () => {
    WebBrowser.openBrowserAsync('https://docs.expo.io/versions/latest/guides/development-mode');
  };

  _handleHelpPress = () => {
    WebBrowser.openBrowserAsync(
      'https://docs.expo.io/versions/latest/guides/up-and-running.html#can-t-see-your-changes'
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
