import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import numeral from 'numeral'
import selectExpensesTotal from '../selectors/expenses-total'
import selectVisibleExpenses from '../selectors/expenses'

export const ExpenseSummaryComponent = ({ expensesTotal, expensesCount }) => {
    const expenseWord = expensesCount !== 1 ? 'expenses' : 'expense'
    const formattedExpensesTotal = numeral(expensesTotal / 100).format('$0,0.00')

    return (
        <div className="page-header">
          <div className="content-container">
            <h1 className="page-header__title">
              Viewing <span>{expensesCount}</span> {expenseWord} totalling <span>{formattedExpensesTotal}</span>
            </h1>
            <div className="page-header__actions">
             <Link className="button" to="/create">Add Expense</Link>
            </div>
          </div>
        </div>
    )
}

const matchStateToProps = (state, props) => {
    const visibleExpenses = selectVisibleExpenses(state.expenses, state.filters)
    return {
        expensesTotal: selectExpensesTotal(visibleExpenses),
        expensesCount: visibleExpenses.length
    }
}

export default connect(matchStateToProps)(ExpenseSummaryComponent)