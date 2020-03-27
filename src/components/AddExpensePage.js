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
          <div className="page-header">
            <div className="content-container">
              <h1 className="page-header__title">Add Expense</h1>
            </div>
          </div>
          <div className=" content-container">
            <ExpenseForm 
            onSubmit={this.onSubmit}
          />
          </div>
        </div>
)
  }
}
// we do this so that it is easier to test
const mapDispatchToProps = (dispatch) => ({
  startAddExpense: (expense) => dispatch(startAddExpense(expense))
})

export default connect(undefined, mapDispatchToProps)(AddExpensePage)