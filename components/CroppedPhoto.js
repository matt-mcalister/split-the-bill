import React from "react"
import { View, Image } from "react-native"
import { screenWidth } from "../constants/Styles"

const CroppedPhoto = props => {
  const resizeRatio = screenWidth / props.cropWidth
  return (
    <View style={[{
      overflow: 'hidden',
      height: props.cropHeight * resizeRatio,
      width: props.cropWidth * resizeRatio,
      maxWidth: screenWidth,
      backgroundColor: 'transparent'
      }, props.style]}>
      <Image style={{
        position: 'absolute',
        top: props.cropTop * -1 * resizeRatio,
        left: props.cropLeft * -1 * resizeRatio,
        width: props.originalWidth * resizeRatio,
        height: props.originalHeight * resizeRatio
      }}
        source={props.source}
        resizeMode="contain">
      </Image>
    </View>
  );
}

export default CroppedPhoto
