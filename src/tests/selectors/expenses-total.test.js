import ExpensesTotal from '../../selectors/expenses-total'
import expenses from '../fixtures/expenses'

test('Should return 0 if no expenses', () => {
    const value = ExpensesTotal([])
    expect(value).toBe(0)
})

test('Should add up a single expense', () => {
    const value = ExpensesTotal([expenses[0]])
    expect(value).toBe(195)
})

test('Should add up multiple expenses', () => {
    const value = ExpensesTotal(expenses)
    console.log(value)
    expect(value).toBe(114195)
})