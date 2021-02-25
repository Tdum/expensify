import React from 'react'
import { shallow } from 'enzyme'
import { EditExpensePage } from '../../components/EditExpensePage'
import expenses from '../fixtures/expenses'

let editExpense, removeExpense, wrapper, update, history

beforeEach(() => {
    editExpense = jest.fn()
    removeExpense = jest.fn()
    history = { push: jest.fn() }
    update = {
        description: 'edited description'
    }
    wrapper = shallow(<EditExpensePage editExpense={ editExpense } removeExpense={ removeExpense } history={ history } expense={expenses[1]}/>)
})

test('should render EditExpensePage correctly', () => {
    expect(wrapper).toMatchSnapshot()
})

test('should handle editExpense', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(update)
    expect(history.push).toHaveBeenLastCalledWith('/')
    expect(editExpense).toHaveBeenLastCalledWith(expenses[1].id, update)

})

test('should handle removeExpense', () => {
    wrapper.find('button').simulate('click')
    expect(history.push).toHaveBeenLastCalledWith('/')
    expect(removeExpense).toHaveBeenLastCalledWith({ id: expenses[1].id })
})