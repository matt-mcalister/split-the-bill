import React from "react"
import {
  View,
  Text,
  TextInput
} from "react-native"
import { connect } from "react-redux"
import { confirmPeople } from "../redux/actions/confirmPeople"
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
    const peopleIds = Object.keys(this.state.people)
    const id = peopleIds[0] ? parseInt(peopleIds[peopleIds.length - 1], 10) + 1 : 1
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

  handleRemovePerson = (id) => {
    const people = {...this.state.people}
    delete people[id]
    this.setState({people})
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
              onRemove={() => this.handleRemovePerson(id)}
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
        <ConfirmButtons onConfirm={() => this.props.confirmPeople(this.state.people)} onCancel={console.log}/>
      </View>
    )
	}
}

export default connect(null, { confirmPeople })(AddPeople)
