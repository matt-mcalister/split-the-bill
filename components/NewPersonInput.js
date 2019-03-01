import React from "react"
import { TextInput } from "react-native"

class NewPersonInput extends React.Component {
	constructor(props){
		super(props)
    this.state = {
      name: props.person.name
    }
	}

	render(){
    return (
      <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        onChangeText={(name) => this.setState({name})}
        onSubmitEditing={this.props.handleSubmit}
        value={this.state.text}
      />
    );
	}
}

export default NewPersonInput
