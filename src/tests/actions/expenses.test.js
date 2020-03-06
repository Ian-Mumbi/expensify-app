import { addExpense, removeExpense, editExpense} from '../../actions/expenses'

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
    const expenseData = {
        description: 'Rent',
        note: 'This was last months rent.',
        amount: 109500,
        createdAt: 1000
    }
    const action = addExpense(expenseData)
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String) // beacause this is dynamic we don't know exact value but its of type String
        }
    })
})

test('should setup add action object with default values', () => {
    const action = addExpense()
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            description: '',
            note: '',
            amount: 0, 
            createdAt: 0
        }
    })
})

