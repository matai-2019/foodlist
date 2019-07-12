import React from 'react'
import { render } from 'enzyme'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import configureStore from 'redux-mock-store'

import FoodList from '../../../client/components/FoodList'

test.skip('<FoodList /> contains <Food /> component', () => {
  const mockStore = configureStore()({ foods: [{ name: 'carrot', id: 2 }], info: { pending: false, error: null } })
  const wrapper = render(
    <Provider store={mockStore}>
      <Router>
        <Route component={FoodList} />
      </Router>
    </Provider>
  )
  expect(wrapper.text()).toMatch('carrot')
})
