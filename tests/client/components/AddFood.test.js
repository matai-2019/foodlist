import React from 'react'
import { mount, shallow } from 'enzyme'
import { Form } from 'semantic-ui-react'

import AddFood from '../../../client/components/AddFood'

jest.mock('../../../client/api/api')

test('<AddFood /> test setup is working correctly', () => {
  expect(true).toBeTruthy()
})

test('<AddFood /> contains a form tag', () => {
  const expected = true
  const wrapper = mount(<AddFood />)
  const actual = wrapper.containsMatchingElement(Form)
  expect(actual).toBe(expected)
})

test('<AddFood /> handleInputChange changes state of the component', () => {
  const wrapper = mount(<AddFood />)
  const app = wrapper.instance()
  app.handleInputChange({
    target: {
      name: 'name',
      value: 'carrot'
    }
  })
  expect(app.state.name).toBe('carrot')
})

test('mocks handleSubmit and sets redirect to true', () => {
  expect.assertions(1)
  const wrapper = shallow(<AddFood />)
  const app = wrapper.instance()
  app.handleSubmit = () => {
    app.setState({ redirect: true })
  }
  app.handleSubmit()
  expect(app.state.redirect).toBe(true)
})
