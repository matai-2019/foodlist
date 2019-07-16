import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { mount, shallow } from 'enzyme'

import Food from '../../../client/components/Food'
import Label from '../../../client/components/Label'

// eslint-disable-next-line no-console
const originalError = console.error // eslint-disable-next-line no-console
console.error = message => {
  if (/(Failed prop type)/.test(message)) {
    return null
  }
  originalError(message)
}

test('<Food /> test setup is working correctly', () => {
  expect(true).toBeTruthy()
})

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

test('<Food /> contains 2 x <Label />', () => {
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
  const actual = wrapper.find(Label)
  expect(actual).toHaveLength(2)
})

test('<Food /> passes correct props down to <Label />', () => {
  const data = {
    id: 4,
    name: 'Broccoli',
    carbonOutput: 5.71,
    waterUsage: 322
  }
  const wrapper = shallow(
    <Router>
      <Food food={data}/>
    </Router>
  )
  const carbonOutput = wrapper.children().props().food.carbonOutput
  const waterUsage = wrapper.children().props().food.waterUsage
  expect(carbonOutput).toBe(5.71)
  expect(waterUsage).toBe(322)
})
