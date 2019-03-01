import { StyleSheet, Dimensions } from "react-native"

const screenWidth = Dimensions.get('window').width
const screenHeight = Dimensions.get('window').height

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
  }
});

export default styles
