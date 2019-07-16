import React from 'react'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { mount, shallow } from 'enzyme'
import configureStore from 'redux-mock-store'
import FoodDetails from '../../../client/components/FoodDetails'

describe('FoodDetails test suite', () => {
  it('has test runner working', () => {
    expect(true).toBeTruthy()
  })
})

describe('FoodDetails', () => {
  it('has <WaitIndicator /> if pending is true', () => {
    const match = { params: { foodId: 1 } }
    const mockStore = configureStore([thunk])({ foodDetails: { name: 'Turkey' }, info: { pending: true, error: null } })
    const wrapper = mount(
      <Provider store={mockStore}>
        <FoodDetails match={match}/>
      </Provider>
    )
    const actual = wrapper.find('WaitIndicator').length
    expect(actual).toBe(1)
  })

  it('<FoodDetails> is an instance of FoodDetails', () => {
    const match = { params: { foodId: 1 } }
    const mockStore = configureStore([thunk])({ foodDetails: { name: 'Turkey' }, info: { pending: false, error: null } })
    const wrapper = mount(
      <Provider store={mockStore}>
        <Router>
          <FoodDetails match={match}/>
        </Router>
      </Provider>
    )
    const root = wrapper.find('.food-details')
    expect(root.length).toBe(2)
  })

  it('has page header that includes food name', () => {
    const mockStore = configureStore([thunk])({ foodDetails: { name: 'Turkey' }, info: { pending: false, error: null } })
    const wrapper = mount(
      <Provider store={mockStore}>

        <Router>
          <Route component={FoodDetails} />
        </Router>
      </Provider>
    )
    const header = wrapper.find('.header')
    expect(header.text()).toMatch(/Turkey/)
  })

  it('has props of "foodDetails" passed in', () => {
    expect.assertions(4)
    const foodDetails = {
      name: 'Turkey',
      category: 'meat',
      carbon_output: 403,
      water_usage: 52
    }
    const mockStore = configureStore([thunk])({ foodDetails, info: { pending: false, error: null } })
    const wrapper = mount(
      <Provider store={mockStore}>
        <Router>
          <Route component={FoodDetails} />
        </Router>
      </Provider>
    )
    const html = wrapper.props().store.getState().foodDetails
    expect(html.name).toMatch(/Turkey/)
    expect(html.category).toMatch(/meat/)
    expect(String(html.carbon_output)).toMatch(/403/)
    expect(String(html.water_usage)).toMatch(/52/)
  })

  it('should have a dispatch function in props', () => {
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
