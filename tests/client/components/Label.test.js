import React from 'react'
import { mount } from 'enzyme'

import Label from '../../../client/components/Label'

test('<Label /> returns correct color of label', () => {
  const wrapper = mount(<Label type='carbon' value='12' />)
  expect(wrapper.text()).toMatch('Extreme')
})
