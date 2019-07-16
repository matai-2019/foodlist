import React from 'react'
import { mount } from 'enzyme'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import App from '../../../client/components/App'
import WaitIndicator from '../../../client/components/WaitIndicator'
import ErrorMessage from '../../../client/components/ErrorMessage'

describe('<App /> tests', () => {
  it('jest working', () => {
    expect(true).toBeTruthy()
  })
  it('contains the router', () => {
    const mockStore = configureStore([thunk])({ info: { pending: true } })
    const wrapper = mount(<Provider store={mockStore}><App props={{ info: { pending: false } }}/></Provider>)
    const routerComponents = wrapper.find('Router').length
    expect(routerComponents).toBe(1)
  })
  it('renders WaitIndicator when info.pending is true', () => {
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
})

test('<App/> renders error message when error prop is true', () => {
  const mockStore = configureStore([thunk])( 
    {
      foods: [{ name: 'carrot', id: 2 }],
      info: { pending: true, error: 'error 513646 testing' },
      categories: [{ id: 1, name: 'Vegetables' }, { id: 2, name: 'Meat' }]
    })
  const wrapper = mount(<Provider store={mockStore}><App/></Provider>)
  const actual = wrapper.exists(ErrorMessage)
  expect(actual).toBeTruthy()
})
