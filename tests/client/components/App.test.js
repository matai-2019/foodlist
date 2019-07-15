import React from 'react'
import { mount } from 'enzyme'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { BrowserRouter } from 'react-router-dom'

import App from '../../../client/components/App'
import WaitIndicator from '../../../client/components/WaitIndicator'

test('<App /> test setup is working correctly', () => {
  expect(true).toBeTruthy()
})

test('<App /> contains the router', () => {
  const mockStore = configureStore([thunk])(
    {
      foods: [{ name: 'carrot', id: 2 }],
      info: { pending: true, error: null },
      categories: [{ id: 1, name: 'Vegetables' }, { id: 2, name: 'Meat' }]
    })
  const wrapper = mount(<Provider store={mockStore}><App /></Provider>)
  expect(wrapper.containsMatchingElement(BrowserRouter)).toBe(true) 
})

test('<App /> renders WaitIndicator when info.pending is true', () => {
  const mockStore = configureStore([thunk])(
    {
      foods: [{ name: 'carrot', id: 2 }],
      info: { pending: true, error: null },
      categories: [{ id: 1, name: 'Vegetables' }, { id: 2, name: 'Meat' }]
    })
  const wrapper = mount(<Provider store={mockStore}><App /></Provider>)
  const actual = wrapper.exists(WaitIndicator)

  expect(actual).toBe(true)
})
