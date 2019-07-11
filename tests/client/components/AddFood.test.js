import React from 'react'
import { mount } from 'enzyme'

import { Form } from 'semantic-ui-react'

import AddFood from '../../../client/components/AddFood'

test('<AddFood /> contains a form tag', () => {
  const expected = true
  const wrapper = mount(<AddFood />)
  const actual = wrapper.containsMatchingElement(Form)
  expect(actual).toBe(expected)
})

test('handleInputChange changes state of the component', () => {
  const wrapper = mount(<AddFood />)
  const expected = 'carrot'

  const app = wrapper.instance()
  app.handleInputChange({
    target: {
      name: 'name',
      value: 'carrot'
    }
  })
  
  const actual = app.state.name

  expect(actual).toBe(expected)
})