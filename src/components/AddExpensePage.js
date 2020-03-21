import React from 'react'
import { connect } from 'react-redux'
import ExpenseForm from './ExpenseForm'
import { startAddExpense } from '../actions/expenses'

export class AddExpensePage extends React.Component {
  onSubmit = (expense) => {
    // props.dispatch(addExpense(expense)) -> before
    this.props.startAddExpense(expense) // -> after
    this.props.history.push('/') // redirect to dashboard page after adding new expense
  }
  render() {
    return (
        <div>
          <h1>Add Expense</h1>
          <ExpenseForm 
            onSubmit={this.onSubmit}
          />
        </div>
)
  }
}
// we do this so that it is easier to test
const mapDispatchToProps = (dispatch) => ({
  startAddExpense: (expense) => dispatch(startAddExpense(expense))
})

export default connect(undefined, mapDispatchToProps)(AddExpensePage)