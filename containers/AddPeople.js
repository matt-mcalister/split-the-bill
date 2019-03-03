import React from "react"
import {
  View,
  Text,
  TextInput
} from "react-native"
import ConfirmButtons from "../components/ConfirmButtons"
import PersonInput from "../components/PersonInput"
import styles from "../constants/Styles"

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
      <View style={{flex: 8}}>
        { peopleIds.map(id => {
          return (
            <PersonInput
              key={id}
              onChange={this.handleEditPerson}
              onRemove={console.log}
              person={this.state.people[id]}
              isNewPerson={false}
            />
          )
        }) }
        <PersonInput
          onChange={(newPersonName) => this.setState({newPersonName})}
          onSubmit={this.handleAddPerson}
          person={{name: this.state.newPersonName}}
          isNewPerson={true}
        />
      </View>
    )
  }

	render(){
    console.log(this.state);
		return (
      <View style={[styles.column]}>
        <Text style={{ textAlign: "center", fontSize: 30}}>Who should pay?</Text>
        {this.renderPeopleInputs()}
        <ConfirmButtons onConfirm={console.log} onCancel={console.log}/>
      </View>
    )
	}
}

export default AddPeople
