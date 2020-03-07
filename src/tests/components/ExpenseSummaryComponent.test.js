import React from 'react'
import { shallow } from 'enzyme'
import { ExpenseSummaryComponent } from '../../components/ExpenseSummaryComponent'
import expenses from '../fixtures/expenses'

test('Should render ExpenseSummaryComponent with one expense', () => {
    const wrapper = shallow(<ExpenseSummaryComponent expensesCount={1} expensesTotal={235} />)
    expect(wrapper).toMatchSnapshot()
})

test('Should render ExpenseSummaryComponent with multiple expenses', () => {
    const wrapper = shallow(<ExpenseSummaryComponent expensesCount={2} expensesTotal={46746} />)
    expect(wrapper).toMatchSnapshot()
})