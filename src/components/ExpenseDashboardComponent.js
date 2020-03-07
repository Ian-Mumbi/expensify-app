import React from 'react'
import ExpenseList from './ExpenseList'
import ExpenseListFilters from './ExpenseListFilters'
import ExpenseSummaryComponent from './ExpenseSummaryComponent'

const ExpenseDashboardComponent = (props) => (
        <div>
          <ExpenseSummaryComponent />
          <ExpenseListFilters />
          <ExpenseList />
        </div>
)

export default ExpenseDashboardComponent