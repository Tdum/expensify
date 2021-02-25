import React from 'react'
import { shallow } from 'enzyme'
import moment from 'moment'
import { ExpenseListFilters } from '../../components/ExpenseListFilters'
import { filters, altFilters } from '../fixtures/filters'

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper, textChangeEvent, sortByDateEvent, sortByAmountEvent

beforeEach(() => {
    setTextFilter = jest.fn()
    sortByDate = jest.fn()
    sortByAmount = jest.fn()
    setStartDate = jest.fn()
    setEndDate = jest.fn()
    textChangeEvent = {
        target: {
            value: 'This is my text'
        }
    }
    sortByDateEvent = {
        target: {
            value: 'date'
        }
    }
    sortByAmountEvent = {
        target: {
            value: 'amount'
        }
    }
    wrapper = shallow(
        <ExpenseListFilters 
            filters={filters}
            setTextFilter={setTextFilter}
            sortByDate={sortByDate}
            sortByAmount={sortByAmount}
            setStartDate={setStartDate}
            setEndDate={setEndDate}
        />
    )
})

test('should render ExpenseListFilters correctly', () => {
    expect(wrapper).toMatchSnapshot()
})

test('should render ExpenseListFilters with alt data correctly', () => {
    wrapper.setProps({
        filters: altFilters
    })
    expect(wrapper).toMatchSnapshot()
})

test('should handle text change', () => {
    wrapper.find('input').at(0).simulate('change', textChangeEvent);
    expect(setTextFilter).toHaveBeenLastCalledWith(textChangeEvent.target.value)
})

test('should sort by date', () => {
    wrapper.setProps({
        filters: altFilters
    })
    wrapper.find('select').simulate('change', sortByDateEvent)
    expect(sortByDate).toHaveBeenCalled()
})

test('should sort by amount', () => {
    wrapper.find('select').simulate('change', sortByAmountEvent)
    expect(sortByAmount).toHaveBeenCalled()
})

test('should handle date changes', () => {
    wrapper.find('DateRangePicker').prop('onDatesChange')({ 
        startDate: moment(0),
        endDate: moment(0).add(4, 'days') 
    })
    expect(setStartDate).toHaveBeenLastCalledWith(moment(0))
    expect(setEndDate).toHaveBeenLastCalledWith(moment(0).add(4, 'days'))
})
test('should handle date focus changes', () => {
    const focusChange = 'endDate'
    wrapper.find('DateRangePicker').prop('onFocusChange')(focusChange)
    expect(wrapper.state('calendarFocused')).toBe(focusChange)
})