import React from 'react'
import { connect } from 'react-redux'
import ExpenseForm from './ExpenseForm'
import { editExpense, startRemoveExpense } from '../actions/expenses'

export class EditExpensePage extends React.Component {
    onSubmit = (expense) => {
        // this.props.dispatch(editExpense(props.expense.id, expense))
        this.props.editExpense(this.props.expense.id, expense)
        this.props.history.push('/')
    }

    onClick = () => {
        // props.dispatch(startRemoveExpense({ id: props.expense.id })) 
        this.props.startRemoveExpense({id: this.props.expense.id})
        this.props.history.push('/')
    }

    render() {
        return (
        <div>
            <ExpenseForm 
              expense={this.props.expense}
              onSubmit={this.onSubmit}
            />
            <button onClick={this.onClick}>Remove</button>
        </div>
    ) 
    }
}

const mapStateToProps = (state, props) => ({
    expense: state.expenses.find((expense) => expense.id === props.match.params.id)
})

const mapDispatchToProps = (dispatch, props) => ({
    editExpense: (expenseId, expense) => dispatch(editExpense(expenseId, expense)),
    startRemoveExpense: (data) => dispatch(startRemoveExpense(data)) 
})

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage)