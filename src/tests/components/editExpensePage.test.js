import React from 'react'
import { shallow } from 'enzyme'
import { EditExpensePage } from '../../components/EditExpensePage'
import expenses from '../fixtures/expenses'

let startEditExpense, startRemoveExpense, wrapper, update, history

beforeEach(() => {
    startEditExpense = jest.fn()
    startRemoveExpense = jest.fn()
    history = { push: jest.fn() }
    update = {
        description: 'edited description'
    }
    wrapper = shallow(<EditExpensePage startEditExpense={ startEditExpense } startRemoveExpense={ startRemoveExpense } history={ history } expense={expenses[1]}/>)
})

test('should render EditExpensePage correctly', () => {
    expect(wrapper).toMatchSnapshot()
})

test('should handle editExpense', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(update)
    expect(history.push).toHaveBeenLastCalledWith('/')
    expect(startEditExpense).toHaveBeenLastCalledWith(expenses[1].id, update)

})

test('should handle startRemoveExpense', () => {
    wrapper.find('button').simulate('click')
    expect(history.push).toHaveBeenLastCalledWith('/')
    expect(startRemoveExpense).toHaveBeenLastCalledWith({ id: expenses[1].id })
})