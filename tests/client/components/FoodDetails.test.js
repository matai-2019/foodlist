import React from 'react'
import { Provider } from 'react-redux'
import FoodDetails from '../../../client/components/FoodDetails'
import { render, mount } from 'enzyme'
import configureStore from 'redux-mock-store'

describe('React Tests', () => {
  it('Test Runner is working', () => {
    expect(true).toBeTruthy()
  })

  it('<FoodDetails> root has className of .food-details', () => {
    const mockStore = configureStore()({ foodDetails: { 'name': 'Turkey' } })
    const wrapper = render(
      <Provider store={mockStore}>
        <FoodDetails/>
      </Provider>
    )
    const root = wrapper.find('.food-details')
    expect(root.length).toBe(1)
  })

  it('page header includes food name', () => {
    const mockStore = configureStore()({ foodDetails: { 'name': 'Turkey' } })
    const wrapper = render(
      <Provider store={mockStore}>
        <FoodDetails />
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
    const mockStore = configureStore()({ foodDetails })
    const wrapper = mount(
      <Provider store={mockStore}>
        <FoodDetails />
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
    const mockStore = configureStore()({ foodDetails: {} })
    const wrapper = mount(
      <Provider store={mockStore}>
        <FoodDetails />
      </Provider>
    )
    const dispatch = wrapper.props().store.dispatch
    expect(dispatch).toBeTruthy()
  })
})
