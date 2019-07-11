import React from 'react'
import FoodDetails from '../../../client/components/FoodDetails'
import { render, shallow, mount } from 'enzyme'

FoodDetails.prototype.componentDidMount = () => {}

describe('Tests for FoodDetails Componnent', () => {
  it('Test Runner is working', () => {
    expect(true).toBeTruthy()
  })

  it('<FoodDetails> root has className of .food-details', () => {
    const expected = { 'name': 'Turkey' }
    const wrapper = shallow(<FoodDetails foodDetails={expected}/>)
    const root = wrapper.find('.food-details')
    expect(root.length).toBe(1)
  })

  it('page header includes food name', () => {
    const foodDetails = { 'name': 'Turkey' }
    const wrapper = render(<FoodDetails foodDetails={foodDetails}/>)
    const header = wrapper.find('.header')
    expect(header.text()).toMatch(/Turkey/)
  })

  it('page has props foodDetails passed in', () => {
    const expected = {
      'name': 'Turkey',
      'category': 'meat',
      'carbon_output': 403,
      'water_usage': 52
    }

    const wrapper = mount(<FoodDetails foodDetails={expected}/>)
    const { foodDetails } = wrapper.props()
    expect(foodDetails.name).toBe(expected.name)
    expect(foodDetails.category).toBe(expected.category)
    expect(foodDetails.carbon_output).toBe(expected.carbon_output)
    expect(foodDetails.water_usage).toBe(expected.water_usage)
  })
})
