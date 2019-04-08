import { StyleSheet, Dimensions, Platform, PixelRatio } from "react-native"


const screenWidth = Dimensions.get('window').width
const screenHeight = Dimensions.get('window').height * 0.9

// based on iphone 5s's scale
const scale = screenWidth / 320;

export function normalize(size) {
  const newSize = size * scale
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize))
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2
  }
}

const styles = StyleSheet.create({
  centered: {
    alignItems: "center",
    justifyContent: "center"
  },
  column: {
    flex: 1,
    flexDirection: "column"
  },
  row: {
    flex: 1,
    flexDirection: "row"
  },
  stretch: {
    alignItems: "stretch"
  },
  fullScreen: {
    width: screenWidth,
    height: screenHeight,
  },
  imageConfirm: {
    flex: 8,
    margin: 0,
    alignSelf: "center",
    width: screenWidth * 0.9,
    height: screenHeight * 0.75
  },
  confirmButtonsContainer: {
    flex: 1
  },
  confirmButtons: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#1E6738",
    borderRadius: 10,
  },
  cancelButton: {
    backgroundColor: "red"
  },
  buttonText: {
    color: "white"
  },
  mini: {
    fontSize: normalize(12),
  },
  small: {
    fontSize: normalize(15),
  },
  medium: {
    fontSize: normalize(24),
  },
  large: {
    fontSize: normalize(30),
  },
  xlarge: {
    fontSize: normalize(42),
  },
});

export default styles
export {
  screenWidth,
  screenHeight
}
