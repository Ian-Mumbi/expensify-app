import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { startAddExpense, addExpense, removeExpense, editExpense} from '../../actions/expenses'
import expenses from '../fixtures/expenses'
import database from '../../firebase/firebase'

const middleware = [thunk]
const createMockStore = configureMockStore(middleware)

test('should setup remove expense action object', () => {
    const action = removeExpense({ id: '123abc' })
    expect(action).toEqual({ type: 'REMOVE_EXPENSE', id: '123abc'})
})

test('should setup edit expense action object', () => {
    const action = editExpense('123abc', {
        description: 'Chinesse wear',
        amount: 45000
    })
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123abc',
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

