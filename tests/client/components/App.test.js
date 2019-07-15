import React from 'react'
import { shallow, mount } from 'enzyme'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import App from '../../../client/components/App'
import WaitIndicator from '../../../client/components/WaitIndicator'

test('<App /> test setup is working correctly', () => {
  expect(true).toBeTruthy()
})

test('<App /> contains the router', () => {
  const wrapper = shallow(<App />)
  expect(wrapper.text()).toBe('<BrowserRouter />')
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
