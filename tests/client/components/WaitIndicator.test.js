import React from 'react'
import { mount, shallow } from 'enzyme'
import { Loader } from 'semantic-ui-react'

import WaitIndicator from '../../../client/components/WaitIndicator'

test('<WaitIndicator /> test setup is working correctly', () => {
  expect(true).toBeTruthy()
})

test('<WaitIndicator /> contains a <Loader />', () => {
  const expected = true
  const wrapper = shallow(<WaitIndicator />)
  const actual = wrapper.containsMatchingElement(Loader)
  expect(actual).toBe(expected)
})

test('<WaitIndicator /> to return message', () => {
  const expected = 'Bacon'
  const wrapper = mount(<WaitIndicator message='Bacon'/>)
  const actual = wrapper.props().message
  expect(actual).toBe(expected)
})

test('<WaitIndicator /> to return "Loading" when no message', () => {
  const expected = 'Loading'
  const wrapper = mount(<WaitIndicator />)
  expect(wrapper.text()).toMatch(expected)
})
