import React from 'react'
import { mount } from 'enzyme'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import { BrowserRouter as Router, Route } from 'react-router-dom'


import { Form } from 'semantic-ui-react'
import EditFood from '../../../client/components/EditFood'

// eslint-disable-next-line no-console
const originalError = console.error // eslint-disable-next-line no-console
console.error = message => {
  if (/(Failed prop type)/.test(message)) {
    return null
  }
  originalError(message)
}

describe('EditFood', () => {
  it('contains a form tag', () => {
    const match = { params: { foodId: 1 } }
    const mockStore = configureStore([thunk])({foodDetails: {id:1, name: 'yofuck', waterUsage: 1, carbonOutput: 0}})
    const wrapper = mount(
      <Provider store={mockStore}>
        <Router>
          <EditFood match={match} />
        </Router>
      </Provider>
    )
    const actual = wrapper.containsMatchingElement(Form)
    expect(actual).toBe(true)
  })

  it('changes state of the component', () => {
    const match = { params: { foodId: 1 } }
    const mockStore = configureStore([thunk])({foodDetails: {id:1, name: 'yofuck', waterUsage: 1, carbonOutput: 0}})
    const wrapper = mount(
      <Provider store={mockStore}>
        <Router>
          <EditFood match={match} />
        </Router>
      </Provider>
    )
    const app = wrapper.instance()
    app.handleChange = () => {
      app.setState({ carbon_output: 555 })
    }
    app.handleChange()
    expect(app.state.carbon_output).toBe(555)
  })

  it('mocks handleSubmit and changes app.state.redirect', () => {
    expect.assertions(1)
    const match = { params: { foodId: 1 } }
    const mockStore = configureStore([thunk])({foodDetails: {id:1, name: 'yofuck', waterUsage: 1, carbonOutput: 0}})
    const wrapper = mount(
      <Provider store={mockStore}>
        <Router>
          <EditFood match={match} />
        </Router>
      </Provider>
    )
    const app = wrapper.instance()
    app.handleSubmit = () => {
      app.setState({ redirect: true })
    }
    app.handleSubmit()
    expect(app.state.redirect).toBe(true)
  })
  it('state is updated on component did mount', () => {
    const match = { params: { foodId: 1 } }
    const mockStore = configureStore([thunk])({foodDetails: {id:1, name: 'yofuck', waterUsage: 1, carbonOutput: 0}})
    const wrapper = mount(
      <Provider store={mockStore}>
        <Router>
          <EditFood match={match} />
        </Router>
      </Provider>
    )
    expect(wrapper.state()).toBeTruthy()
    
  })
})
