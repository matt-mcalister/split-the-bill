import React from "react"
import {
  ScrollView
} from "react-native"
import AddPaging from 'react-native-paged-scroll-view/index';
var PagedScrollView = AddPaging(ScrollView);
import styles, { screenWidth, screenHeight } from "../constants/Styles"
import { connect } from "react-redux"
import TransactionItem from "../components/TransactionItem"
import Totals from "../components/Totals"


class TransactionView extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      transactions: {...this.props.lineAmounts},
      currentPage: 1,
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

  handleChangeText = (id) => {
    return (text) => {
      this.setState({
        transactions: {
          ...this.state.transactions,
          [id]: {
            ...this.state.transactions[id],
            text: text
          }}
      })
    }
  }

  validPrice = (newPrice) => {
    return !newPrice.match(/\..*?(\d{3,})|\..*?(\.)/)
  }

  handleChangePrice = (id) => {
    return (price) => {
      if (this.validPrice(price)) {
        this.setState({
          transactions: {
            ...this.state.transactions,
            [id]: {
              ...this.state.transactions[id],
              data: price
            }}
          })
      }
    }
  }

  handlePageChange = (state) => {
    console.log("whole state: ", state);
    console.log('current horizontal page:', state.currentHorizontalPage)
    this.setState({
      currentPage: state.currentHorizontalPage
    })
  }


  render(){
    let currentPage = this.state.currentPage - 1
    return (
      <React.Fragment>
        <PagedScrollView
          onPageChange={this.handlePageChange}
          horizontal={true}
          pagingEnabled={true}
        >
          {Object.keys(this.state.transactions).map((index, i) => {
            return (
              <TransactionItem
                key={index}
                isFocused={i >= currentPage - 2 && i <= currentPage + 2}
                lineAmount={this.state.transactions[index]}
                handleChangeText={this.handleChangeText(index)}
                handleChangePrice={this.handleChangePrice(index)}
                addPerson={this.addPerson(index)}
                removePerson={this.removePerson(index)}
                peopleIds={this.state.transactions[index].peopleIds}
              />
            )
          })}
          <Totals lineAmounts={this.state.transactions}/>
        </PagedScrollView>
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
