import { StyleSheet } from "react-native"
import { Dimensions } from 'react-native';

const styles = StyleSheet.create({
  centered: {
    alignItems: "center",
    justifyContent: "center"
  },
  column: {
    flexDirection: "column"
  },
  row: {
    flexDirection: "row"
  },
  fullScreen: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  }
});

export default styles
