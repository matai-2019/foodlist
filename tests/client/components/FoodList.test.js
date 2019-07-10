import React from 'react'
import { shallow } from 'enzyme'

import FoodList from '../../../client/components/FoodList'

test('<FoodList /> contains <Food />', () => {
  const wrapper = shallow(<FoodList />)
  expect(wrapper.text()).toMatch('<Food />')
})
