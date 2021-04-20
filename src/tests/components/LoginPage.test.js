import React from 'react'
import { shallow } from 'enzyme'
import { LoginPage } from '../../components/LoginPage'

test('should render LoginPage component properly', () => {
    const wrapper = shallow(<LoginPage startLogin={() => {}}/>)
    expect(wrapper).toMatchSnapshot()
})

test('shoud call startLogin on button click', () => {
    const startLoginSpy = jest.fn()
    const wrapper = shallow(<LoginPage startLogin={startLoginSpy}/>)
    wrapper.find('button').simulate('click')
    expect(startLoginSpy).toHaveBeenCalled()
})