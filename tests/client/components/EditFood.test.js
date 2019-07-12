import React from 'react'
import { mount } from 'enzyme'
import { Form } from 'semantic-ui-react'

import EditFood from '../../../client/components/EditFood'

test('<EditFood /> contains a form tag', () => {
  const expected = true
  const wrapper = mount(<EditFood />)
  const actual = wrapper.containsMatchingElement(Form)
  expect(actual).toBe(expected)
})

test('handleChange changes state of the component', () => {
  const wrapper = mount(<EditFood />)
  const expected = 101

  const app = wrapper.instance()
  app.handleChange({
    target: {
      carbon_output: 101
    }
  })

  const actual = app.state.carbon_output

  expect(actual).toBe(expected)
})
