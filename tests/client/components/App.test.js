import React from 'react'
import { Provider } from 'react-redux'
import { mount } from 'enzyme'
import thunkMiddleware from 'redux-thunk'
import { BrowserRouter } from 'react-router-dom'
import { applyMiddleware, compose, createStore } from 'redux'

import App from '../../../client/components/App'
import reducers from '../../../client/reducers'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunkMiddleware))
)

test('<App /> test setup is working correctly', () => {
  expect(true).toBeTruthy()
})

test('<App /> contains the router', () => {
  const wrapper = mount(<Provider store={store}><App /></Provider>)
  expect(wrapper.containsMatchingElement(BrowserRouter)).toBe(true)
})
