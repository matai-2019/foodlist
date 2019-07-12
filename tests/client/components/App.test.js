import React from 'react'
import { shallow } from 'enzyme'

import App from '../../../client/components/App'

test('<App /> test setup is working correctly', () => {
  expect(true).toBeTruthy()
})

test('<App /> contains the router', () => {
  const wrapper = shallow(<App />)
  expect(wrapper.text()).toBe('<BrowserRouter />')
})
