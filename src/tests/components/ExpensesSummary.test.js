import React from 'react'
import { shallow } from 'enzyme'
import { ExpensesSummary } from '../../components/ExpensesSummary'
import expenses from '../fixtures/expenses'


test('Should render ExpensesSummary correctly with 1 expense', () => {
    const wrapper = shallow(<ExpensesSummary expensesCount={1} expensesTotal={100.10}/>)
    expect(wrapper).toMatchSnapshot()
})

test('Should render ExpensesSummary with 2 expenses', () => {
    const wrapper = shallow(<ExpensesSummary expensesCount={2} expensesTotal={2000.20}/>)
    expect(wrapper).toMatchSnapshot()
})