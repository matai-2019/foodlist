import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { render, shallow } from 'enzyme'
import configureStore from 'redux-mock-store'
import FoodDetails from '../../../client/components/FoodDetails'

describe('React Tests', () => {
  it('Test Runner is working', () => {
    expect(true).toBeTruthy()
  })

  it('Loading message if pending is true', () => {
    const mockStore = configureStore()({ foodDetails: { 'name': 'Turkey' }, info: { pending: true, error: null } })
    const wrapper = render(
      <Provider store={mockStore}>
        <Router>
          <Route component={FoodDetails} />
        </Router>
        <FoodDetails />
      </Provider>
    )
    expect(wrapper.text()).toMatch(/LOADING.../)
  })

  it('<FoodDetails> is an instance of FoodDetails', () => {
    const mockStore = configureStore()({ foodDetails: { 'name': 'Turkey' }, info: { pending: false, error: null } })
    const wrapper = render(
      <Provider store={mockStore}>
        <Router>
          <Route component={FoodDetails} />
        </Router>
      </Provider>
    )
    const root = wrapper.find('.food-details')
    expect(root.length).toBe(1)
  })

  it('page header includes food name', () => {
    const mockStore = configureStore()({ foodDetails: { 'name': 'Turkey' }, info: { pending: false, error: null } })
    const wrapper = render(
      <Provider store={mockStore}>
        <Router>
          <Route component={FoodDetails} />
        </Router>
      </Provider>
    )
    const header = wrapper.find('.header')
    expect(header.text()).toMatch(/Turkey/)
  })

  it('page has props foodDetails passed in', () => {
    const foodDetails = {
      'name': 'Turkey',
      'category': 'meat',
      'carbon_output': 403,
      'water_usage': 52
    }
    const mockStore = configureStore()({ foodDetails, info: { pending: false, error: null } })
    const wrapper = render(
      <Provider store={mockStore}>
        <Router>
          <Route component={FoodDetails} />
        </Router>
      </Provider>
    )
    const html = wrapper.text()
    expect(html).toMatch(/Turkey/)
    expect(html).toMatch(/meat/)
    expect(html).toMatch(/403/)
    expect(html).toMatch(/52/)
  })
})

describe('Redux Test', () => {
  it('Should have a dispatch function in props', () => {
    const mockStore = configureStore()({ foodDetails: {}, info: {} })
    const wrapper = shallow(
      <Provider store={mockStore}>
        <Router>
          <Route component={FoodDetails} />
        </Router>
      </Provider>
    )
    const dispatch = wrapper.props().value.store.dispatch
    expect(dispatch).toBeTruthy()
  })
})
