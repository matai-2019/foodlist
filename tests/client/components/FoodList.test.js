import React from 'react'
// import { shallow } from 'enzyme'
import { render } from 'enzyme'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'

import FoodList from '../../../client/components/FoodList'

test('<FoodList /> contains <Food />', () => {
  const mockStore = configureStore()({ foods: [{ name: 'carrot', id: 2 }], info: { pending: false, error: null } })
  const wrapper = render(
    <Provider store={mockStore}>
      <FoodList />
    </Provider>
  )
  expect(wrapper.text()).toMatch('carrot')
})
