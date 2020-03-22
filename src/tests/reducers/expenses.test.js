import expensesReducer from '../../reducers/expenses'
import expenses from '../fixtures/expenses'

test('should set default state', () => {
    const state = expensesReducer(undefined, { type: '@@INIT' }) // we put the state as undefined so that we can test the default case
    expect(state).toEqual([])
})

test('should remove expense by id', () => {
    const action = { type: 'REMOVE_EXPENSE', id: expenses[1].id } // try to remove expense with id of 2
    const state = expensesReducer(expenses, action)
    expect(state).toEqual([ expenses[0], expenses[2] ])
})

test('should not remove expense if id not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '130'
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual(expenses)
})

test('should add expense', () => {
    const expense = {
        id: '4',
        description: 'Tea',
        note: '',
        amount: 7890,
        createdAt: 1000
    }
    const action = {
        type: 'ADD_EXPENSE',
        expense
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual([ ...expenses, expense ])
})


test('should edit expense', () => {
    const description = 'Gum to chew'
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[0].id,
        updates: {
            description
        }
    }
    const state = expensesReducer(expenses, action)
    expect(state[0].description).toBe(description)
})

test('should not edit expense if id not found', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: '65735783456',
        updates: {
            description: 'Should fail'
        }
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual(expenses)
})

test('Should set expenses', () => {
    const expensesNew = [{
        id: '6576',
        description: 'Mnagoes',
        amount: 67857686,
        note: '',
        createdAt: 909
    }, {
        id: '6894',
        description: 'Oranges',
        amount: 7897,
        note: '',
        createdAt: 455
    }, {
        id: '79r7885',
        description: 'Mahindi',
        amount: 798,
        note: '',
        createdAt: 890
    }]
    const action = {
        type: 'SET_EXPENSES',
        expenses: expensesNew
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual(expensesNew)
})