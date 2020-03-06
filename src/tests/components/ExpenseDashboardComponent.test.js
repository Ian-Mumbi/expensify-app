import React from 'react'
import { shallow } from 'enzyme'
import ExpenseDashboardComponent from '../../components/ExpenseDashboardComponent'

test('should render ExpenseDashboardComponent correctly', () => {
    const wrapper = shallow(<ExpenseDashboardComponent />)
    expect(wrapper).toMatchSnapshot()
})