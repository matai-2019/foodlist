import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { mount } from 'enzyme'

import Food from '../../../client/components/Food'
import Label from '../../../client/components/Label'


test('<Food /> test setup is working correctly', () => {
  expect(true).toBeTruthy()
})

test.skip('<Food /> contains a 2 x <Label />', () => {})

test('<Food/> contains a <Label/>', () => {
  const data = {
    id: 4,
    name: 'Broccoli',
    carbonOutput: 5.71,
    waterUsage: 322
  }
  const wrapper = mount(
    <Router>
      <Food food={data}/>
    </Router>
  )
  const actual = wrapper.containsMatchingElement(Label)
  expect(actual).toBe(true)
})