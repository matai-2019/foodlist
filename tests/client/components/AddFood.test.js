import React from 'react'
import thunk from 'redux-thunk'
import { render, mount, shallow } from 'enzyme'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
// import { Form } from 'semantic-ui-react'
import configureStore from 'redux-mock-store'

import AddFood from '../../../client/components/AddFood'

jest.mock('../../../client/api/api')

const categories = [
  {
    id: 1,
    name: 'Fruits'
  }
]

test('<AddFood /> test setup is working correctly', () => {
  expect(true).toBeTruthy()
})

test('<AddFood /> renders the addfood component', () => {
  const mockStore = configureStore([thunk])({ categories })
  const wrapper = mount(
    <Provider store={mockStore}>
      <AddFood/>
    </Provider>
  )
  console.log('find', wrapper)
  expect(wrapper.instance()).toBe.instanceOf(<AddFood/>)
})

test.skip('<AddFood /> contains a form tag', () => {
  const expected = true
  const wrapper = mount(<AddFood />)
  const actual = wrapper.containsMatchingElement('Form')
  expect(actual).toBe(expected)
})

test.skip('<AddFood /> handleInputChange changes state of the component', () => {
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

test.skip('handleSubmit changes state.redirect to true', () => {
  const wrapper = shallow(<AddFood />)
  const expected = true

  const app = wrapper.instance()
  return app.handleSubmit().then(() => {
    const actual = app.state.redirect

    expect(actual).toBe(expected)
  })
})
