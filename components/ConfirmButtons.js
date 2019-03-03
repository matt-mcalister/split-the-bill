import React from "react"
import { View, TouchableOpacity, Text } from "react-native"
import styles from "../constants/Styles"

const ConfirmButtons = ({ onConfirm, onCancel }) => {
  return (
    <View style={[styles.row, styles.confirmButtonsContainer]}>
      <TouchableOpacity
        style={[styles.confirmButtons, styles.cancelButton]}
        onPress={onCancel}>
        <Text style={[styles.buttonText]}>Cancel</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.confirmButtons]}
        onPress={onConfirm}>
        <Text style={[styles.buttonText]}>Confirm</Text>
      </TouchableOpacity>
    </View>
  )
}

export default ConfirmButtons
