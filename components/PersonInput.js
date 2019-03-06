import React from "react"
import { TextInput, TouchableOpacity, Text, View } from "react-native"
import styles from "../constants/Styles"

const PersonInput = ({ onChange, onSubmit, onRemove, person, isNewPerson }) => {
	if (isNewPerson) {
		return (
			<View style={{...styles.row, maxHeight:30}}>
				<TextInput
					placeholder="Tap to add another person"
					onChangeText={onChange}
					onSubmitEditing={onSubmit}
					value={person.name}
					style={{flex: 9, borderColor: 'gray', borderWidth: 1}}
				/>
			</View>
		)
	} else {
		return (
			<View style={{...styles.row, maxHeight:30}}>
				<TextInput
					onChangeText={(name) => onChange(name, person.id)}
					value={person.name}
					style={{flex: 9, borderColor: 'gray', borderWidth: 1}}
				/>
				<TouchableOpacity onPress={onRemove} style={{...styles.centered, flex: 1}}>
					<Text style={{backgroundColor: "red", color: "white"}}>X</Text>
				</TouchableOpacity>
			</View>
		)
	}
}

export default PersonInput
