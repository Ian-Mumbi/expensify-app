import React from 'react'
import ExpenseList from './ExpenseList'
import ExpenseListFilters from './ExpenseListFilters'

const ExpenseDashboardComponent = (props) => (
        <div>
          <ExpenseListFilters />
          <ExpenseList />
        </div>
)

export default ExpenseDashboardComponent