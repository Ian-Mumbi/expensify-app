import React from 'react'
import { connect } from 'react-redux'
import numeral from 'numeral'
import selectExpensesTotal from '../selectors/expenses-total'
import selectVisibleExpenses from '../selectors/expenses'

export const ExpenseSummaryComponent = ({ expensesTotal, expensesCount }) => {
    const expenseWord = expensesCount !== 1 ? 'expenses' : 'expense'
    const formattedExpensesTotal = numeral(expensesTotal / 100).format('$0,0.00')

    return (
        <div>
        <h1>
            Viewing {expensesCount} {expenseWord} totalling {formattedExpensesTotal}
        </h1>
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