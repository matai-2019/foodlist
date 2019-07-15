import React from 'react'
import { render } from 'enzyme'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux'

import SortListDropdown from '../../../client/components/SortListDropdown'

test('<SortListDropdown /> renders the dropdown menu', () => {
  const mockStore = configureStore()({ sortType: 'SORT_AZ' })
  const wrapper = render(
    <Provider store={mockStore}>
      <Router>
        <Route component={SortListDropdown} />
      </Router>
    </Provider>
  )
  expect(wrapper.text()).toMatch('Water Usage High-Low')
})
