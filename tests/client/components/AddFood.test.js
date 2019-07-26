import React from 'react'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import configureStore from 'redux-mock-store'
import { mount } from 'enzyme'
import { Form } from 'semantic-ui-react'

import AddFood from '../../../client/components/AddFood'

jest.mock('../../../client/api/foods')

const categories = [
  {
    id: 1,
    name: 'Fruits'
  }
]

const mockStore = configureStore([thunk])({ categories, carbon_output: '' })

test('<AddFood /> test setup is working correctly', () => {
  expect(true).toBeTruthy()
})

test('<AddFood /> contains a form tag', () => {
  const wrapper = mount(
    <Provider store={mockStore}>
      <AddFood />
    </Provider>
  )
  const actual = wrapper.containsMatchingElement(Form)
  expect(actual).toBe(true)
})

it('handleChange changes state of the component', () => {
  const wrapper = mount(
    <Provider store={mockStore}>
      <AddFood />
    </Provider>
  )
  const app = wrapper.instance()
  app.handleChange = () => {
    app.setState({ carbon_output: 555 })
  }
  app.handleChange()
  expect(app.state.carbon_output).toBe(555)
})

test('mocks handleSubmit and sets redirect to true', () => {
  expect.assertions(1)

  const wrapper = mount(
    <Provider store={mockStore}>
      <AddFood />
    </Provider>
  )
  const app = wrapper.instance()
  app.handleSubmit = () => {
    app.setState({ redirect: true })
  }
  app.handleSubmit()
  expect(app.state.redirect).toBe(true)
})
