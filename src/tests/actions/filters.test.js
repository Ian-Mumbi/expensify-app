import { 
    setTextFilter, 
    sortByDate, 
    sortByAmount, 
    setStartDate, 
    setEndDate 
} from '../../actions/filters'
import moment from 'moment'

test('should setup set start date action object', () => {
    const action = setStartDate(moment(0)) // use moment(0) instead of moment() coz the latter will generate time accoring to when the script runs
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    })
})

test('should generate set end date action object', () => {
    const action = setEndDate(moment(0))
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)
    })
})

test('should generate sort by amount action object', () => {
    const action = sortByAmount()
    expect(action).toEqual({ type: 'SORT_BY_AMOUNT' })
})

test('should generate sort by date action object', () => {
    const action = sortByDate()
    expect(action).toEqual({ type: 'SORT_BY_DATE' })
})

test('should set text filter action object', () => {
    const action = setTextFilter('rent')
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: 'rent'
    })
})

test('should set text filter action object with default', () => {
    const action = setTextFilter()
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    })
})