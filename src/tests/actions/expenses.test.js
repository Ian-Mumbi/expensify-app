import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { 
    startAddExpense,
    addExpense, 
    removeExpense, 
    editExpense, 
    setExpenses, 
    startSetExpenses, 
    startRemoveExpense, 
    startEditExpense } from '../../actions/expenses'
import expenses from '../fixtures/expenses'
import database from '../../firebase/firebase'

const middleware = [thunk]
const createMockStore = configureMockStore(middleware)

beforeEach((done) => {
    const expenseData = {}
    expenses.forEach(({ id, description, note, amount, createdAt }) => {
        expenseData[id] = {description, amount, note, createdAt }
    })
    database.ref('expenses').set(expenseData).then(() =>  done())
})

test('should setup remove expense action object', () => {
    const id = expenses[0].id
    const action = removeExpense({ id })
    expect(action).toEqual({ type: 'REMOVE_EXPENSE', id })
})

test('should setup edit expense action object', () => {
    const id = expenses[0].id
    const action = editExpense(id, {
        description: 'Chinesse wear',
        amount: 45000
    })
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id,
        updates: {
            description: 'Chinesse wear',
            amount: 45000
        }
    })
})

test('should setup add action object with provided values', () => {
    const action = addExpense(expenses[2])
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: expenses[2]
    })
})

test('Should add expense to database and store', (done) => {
    const store = createMockStore({}) // Create mock store and use this to know if an action was dispatched

    const expenseData = {
        description: 'House',
        amount: 450000,
        note: 'This is for my mom',
        createdAt: 785656789
    }
    // Check if action was dispatched
    store.dispatch(startAddExpense(expenseData)).then( () => {
        const actions = store.getActions()
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expenseData
            }
        })
        console.log('action', actions)
        // Check if database was changed
        return database.ref(`expenses/${actions[0].expense.id}`).once('value')
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseData)
        done()
    })
})

test('Should add expense with defaults to database and store', (done) => {
    const store = createMockStore({}) // Create mock store and use this to know if an action was dispatched

    const expenseData = {
        description: '',
        amount: 0,
        note: '',
        createdAt: 0
    }
    // Check if action was dispatched
    store.dispatch(startAddExpense({})).then(() => {
        const actions = store.getActions()
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expenseData
            }
        })
        console.log('action', actions)
        // Check if database was changed
        return database.ref(`expenses/${actions[0].expense.id}`).once('value')
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseData)
        done()
    })
})

test('Should setup set expenses action object with data', () => {
    expect(setExpenses(expenses)).toEqual({
        type: 'SET_EXPENSES',
        expenses
    })
})

test('Should fetch expenses from firebase', (done) => {
    const store = createMockStore({})
    store.dispatch(startSetExpenses()).then(() => {
        const actions = store.getActions()
        expect(actions[0]).toEqual({
            type: 'SET_EXPENSES',
            expenses
        })
        done()
    })
})

test("Should remove expenses from firebase", (done) => {
    const store = createMockStore({})
    const id = expenses[2].id
    store.dispatch(startRemoveExpense({ id })).then(() => {
        const actions = store.getActions()
        expect(actions[0]).toEqual({
            type: 'REMOVE_EXPENSE',
            id
        })

        return database.ref(`expenses/${id}`).once('value')
    }).then((snapshot) => {
        expect(snapshot.val()).toBeFalsy()
        done()
    })
})

test('Should update expenses from firebase', (done) => {
    const store = createMockStore({})
    const id = expenses[0].id
    const updates = {
        description: 'Testing startEditExpense'
    }
    store.dispatch(startEditExpense(id, updates)).then(() => {
        const actions = store.getActions()
        expect(actions[0]).toEqual({
            type: 'EDIT_EXPENSE',
            id,
            updates
        })

        return database.ref(`expenses/${id}`).once('value')
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual({
            ...snapshot.val(),
            ...updates
        })
        done()
    })
})