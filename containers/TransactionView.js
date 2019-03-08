import React from "react"
import {
  ScrollView
} from "react-native"
import styles, { screenWidth, screenHeight } from "../constants/Styles"
import { connect } from "react-redux"
import TransactionItem from "../components/TransactionItem"
import ConfirmButtons from "../components/ConfirmButtons"


class TransactionView extends React.Component {
  constructor(props){
    super(props)

    let transactions = {}
    this.props.lineAmounts.forEach(la => {
      transactions[la.index] = {index: la.index, peopleIds: []}
    })
    this.state = {
      transactions: transactions
    }
  }

  addPerson = (index) => {
    return (id) => {
      this.setState({
        transactions: {
          ...this.state.transactions,
          [index]: {...this.state.transactions[index], peopleIds: [...this.state.transactions[index].peopleIds, id]}
        }
      })
    }
  }

  removePerson = (index) => {
    return (id) => {
      let peopleIds = this.state.transactions[index].peopleIds.filter(pid => pid !== id)
      this.setState({
        transactions: {
          ...this.state.transactions,
          [index]: {...this.state.transactions[index], peopleIds }
        }
      })
    }
  }
  render(){
    return (
      <React.Fragment>
        <ScrollView
          horizontal={true}
          pagingEnabled={true}
        >
          {this.props.lineAmounts.map(la => {
            return (
              <TransactionItem
                key={la.text}
                lineAmount={la}
                addPerson={this.addPerson(la.index)}
                removePerson={this.removePerson(la.index)}
                peopleIds={this.state.transactions[la.index].peopleIds}
              />
            )
          })}
        </ScrollView>
        <ConfirmButtons style={{position: "absolute", bottom: 0, width: screenWidth, height: screenHeight / 10}}/>
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    lineAmounts: state.selectPhoto.lineAmounts
  }
}

export default connect(mapStateToProps)(TransactionView)
