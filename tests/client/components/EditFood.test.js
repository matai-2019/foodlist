import React from 'react'
import { mount, shallow } from 'enzyme'
import { Form } from 'semantic-ui-react'

import EditFood from '../../../client/components/EditFood'

jest.mock('../../../client/api/api')

test('<EditFood /> contains a form tag', () => {
  const expected = true
  const wrapper = mount(<EditFood />)
  const actual = wrapper.containsMatchingElement(Form)
  expect(actual).toBe(expected)
})

test('<EditFood /> handleChange changes state of the component', () => {
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

test('handleSubmit changes state.redirect to true', () => {
  const wrapper = shallow(<EditFood />)
  const expected = true

  const app = wrapper.instance()
  return app.handleSubmit().then(() => {
    const actual = app.state.redirect

    expect(actual).toBe(expected)
  })
})
