import React from 'react'
import { mount } from 'enzyme'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import FoodList from '../../../client/components/FoodList'

// eslint-disable-next-line no-console
const originalError = console.error // eslint-disable-next-line no-console
console.error = message => {
  if (/(Failed prop type)/.test(message)) {
    return null
  }
  originalError(message)
}

test('<FoodList /> contains <Food /> component', () => {
  const mockStore = configureStore([thunk])(
    {
      foods: [{ name: 'carrot', id: 2 }],
      info: { pending: false, error: null },
      categories: [{ id: 1, name: 'Vegetables' }, { id: 2, name: 'Meat' }]
    })
  const wrapper = mount(
    <Provider store={mockStore}>
      <Router>
        <Route component={FoodList} />
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
    const mockStore = configureStore([thunk])({
      foods: [{ name: 'carrot', id: 2 }],
      info: { pending: false, error: null },
      categories: [{ id: 1, name: 'Vegetables' }, { id: 2, name: 'Meat' }]
    })
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
  it('dispatches getFoods when category exists', () => {
    const match = { params: { id: 3 }, path: 'category', category: 'meat' }
    const mockStore = configureStore([thunk])({
      foods: [{ name: 'carrot', id: 2 }],
      info: { pending: false, error: null },
      categories: [{ id: 1, name: 'Vegetables' }, { id: 2, name: 'Meat' }]
    })
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
})

test('<FoodList /> renders <Food /> component with search term', () => {
  const expected = 'Lamb'

  const mockStore = configureStore([thunk])(
    {
      foods: [{ name: 'Lamb', id: 1 }, { name: 'Chicken', id: 2 }, { name: 'Beef', id: 3 }],
      info: { pending: false, error: null },
      categories: [{ id: 1, name: 'Vegetables' }, { id: 2, name: 'Meat' }],
      search: expected,
      sortType: 'FILTER'
    })
  const wrapper = mount(
    <Provider store={mockStore}>
      <Router>
        <Route component={FoodList} />
      </Router>
    </Provider>
  )
  expect(wrapper.text()).toMatch(expected)
  expect(wrapper.text()).not.toMatch('Beef')
})
