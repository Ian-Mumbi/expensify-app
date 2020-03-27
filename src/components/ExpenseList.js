import React from 'react'
import { connect } from 'react-redux'
import ExpenseListItem from './ExpenseListItem'
import selectExpenses from '../selectors/expenses'

// pass this component to the function we get when we call connect below to connect this component to the store

// To test React components like the ExpenseList component, we have to test the unconected componwnt i.e we want to pass expenses
// ourselves not from the store so we will export this. therefore this file will export 2 functions 
// named export and default export
export const ExpenseList = (props) => (
    <div className="content-container">
      <div className="list-header">
       <div className="show-for-mobile">Expenses</div>
       <div className="show-for-desktop">Expense</div>
       <div className="show-for-desktop">Amount</div>
    </div>
        <div className="list-body">
            {
                props.expenses.length === 0 ? (
                    <div className="list-item--message">
                        <span className="list-item list-item--message">No expenses</span>
                    </div>
                ) : (
                    props.expenses.map((expense) => <ExpenseListItem key={expense.id} {...expense}/>)
                )
            }
        </div>
    </div>
)

// This function takes in the state of the store and defines the information a component want from the store
// in this case the component wants the array of expenses not filters
const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters) // these are filtered and sorted expenses
    }
}

export default connect(mapStateToProps)(ExpenseList)