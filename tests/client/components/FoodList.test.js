import React from 'react'
import { render, mount } from 'enzyme'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import FoodList from '../../../client/components/FoodList'

test.skip('<FoodList /> contains <Food /> component', () => {
  const mockStore = configureStore()({ foods: [{ name: 'carrot', id: 2 }], info: { pending: false, error: null } })
  const wrapper = render(
    <Provider store={mockStore}>
      <Router>
        <FoodList />
      </Router>
    </Provider>
  )
  expect(wrapper.text()).toMatch('carrot')
})

describe('Category toggle', () => {
  it('handles ternery correctly', () => {
    const category = 'meat'
    expect(category ? 'truthy' : null).toBeTruthy()
  })
  it('fails on falsy', () => {
    const category = null
    expect(category ? 'truthy' : null).toBeFalsy()
  })
  it('dispatches getFoods', () => {
    const match = { params: { id: 3 }, path: 'category' }
    const mockStore = configureStore([thunk])({ foods: [{ name: 'carrot', id: 2 }], info: { pending: false, error: null } })
    const wrapper = mount(
      <Provider store={mockStore}>
        <Router>
          <FoodList match={match}/>
        </Router>
      </Provider>
    )
    const actions = wrapper.state().subscription.store.getActions()[0]
    expect(actions).toStrictEqual({ type: 'GET_FOODS_PENDING' })
  })
  it('dispatches getCategories when category exists', () => {
    const match = { params: { id: 3 }, path: 'category', category: 'meat' }
    const mockStore = configureStore([thunk])({ foods: [{ name: 'carrot', id: 2 }], info: { pending: false, error: null } })
    const wrapper = mount(
      <Provider store={mockStore}>
        <Router>
          <FoodList match={match}/>
        </Router>
      </Provider>
    )
    const actions = wrapper.state().subscription.store.getActions()[0]
    expect(actions).toStrictEqual({ type: 'GET_CATEGORY_PENDING' })
  })
})
