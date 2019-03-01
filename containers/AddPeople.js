import React from "react"
import {
  View,
  Text,
  TextInput
} from "react-native"

class AddPeople extends React.Component {
	state = {
    people: {
      1: {
        id: 1,
        name: "You"
      }
    },
    newPersonName: ""
  }

  handleEditPerson = (name, id) => {
    this.setState({
      people: {
        ...this.state.people,
        [id]: {
          id,
          name
        }
      }
    })
  }

  handleAddPerson = (e) => {
    const name = this.state.newPersonName
    const id = Object.keys(this.state.people).length + 1
    this.setState({
      people: {
        ...this.state.people,
        [id]: {
          id,
          name
        }
      },
      newPersonName: ""
    })
  }

  renderPeopleInputs(){
    const peopleIds = Object.keys(this.state.people)
    return (
      <View>
        { peopleIds.map(id => {
          return (
            <TextInput
              key={id}
              style={{height: 40, borderColor: 'gray', borderWidth: 1}}
              onChangeText={(name) => this.handleEditPerson(name, id)}
              value={this.state.people[id].name}
            />
          )
        }) }
          <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          placeholder="Tap to add another person"
          onChangeText={(newPersonName) => this.setState({newPersonName})}
          onSubmitEditing={this.handleAddPerson}
          value={this.state.newPersonName}
        />
      </View>
    )
  }

	render(){
    console.log(this.state);
		return (
      <View>
        <Text>Who should pay?</Text>
        {this.renderPeopleInputs()}
      </View>
    )
	}
}

export default AddPeople
