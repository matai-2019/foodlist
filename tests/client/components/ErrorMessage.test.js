import React from 'react'
import { mount } from 'enzyme'
import { Message } from 'semantic-ui-react'

import ErrorMessage from '../../../client/components/ErrorMessage'
// import { shallow } from 'enzyme'

const p = <p></p>

test('<Message /> contains a single <Message.Header/>', () => {
  const wrapper = mount(<ErrorMessage/>)
  const actual = wrapper.find(Message.Header).length
  expect(actual).toBe(1)
})

test('<Message.Header /> renders "Error"', () => {
  const wrapper = mount(<ErrorMessage/>)
  expect(wrapper.text()).toBe('Error')
})

test('<Message /> contains an error message', () => {
  const wrapper = mount(<ErrorMessage message={'error message'}/>)
  expect(wrapper.props().message).toBe('error message')
})
