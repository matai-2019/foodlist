import React from 'react'
import { render } from 'enzyme'
import { MemoryRouter } from 'react-router-dom'

import TopMenu from '../../../client/components/TopMenu'

test('<TopMenu /> contains a link', () => {
  const expected = 'Add Food'
  const wrapper = render(<MemoryRouter><TopMenu/></MemoryRouter>)
  const actual = wrapper.text()
  expect(actual).toMatch(expected)
})
