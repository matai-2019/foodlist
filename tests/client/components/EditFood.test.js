import React from 'react'
import { shallow } from 'enzyme'
import { Form } from 'semantic-ui-react'

import EditFood from '../../../client/components/EditFood'

jest.mock('../../../client/api/api')

describe('EditFood', () => {
  it('contains a form tag', () => {
    const expected = true
    const wrapper = shallow(<EditFood />)
    const actual = wrapper.containsMatchingElement(Form)
    expect(actual).toBe(expected)
  })

  it('changes state of the component', () => {
    const event = { target: { name: 'carbon_output', value: 555 } }
    const wrapper = shallow(<EditFood />)
    const app = wrapper.instance()
    wrapper.find(Form.Field).find({ name: 'carbon_output' }).simulate('change', event)
    expect(app.state.carbon_output).toBe(555)
  })

  it('changes state.redirect to true', () => {
    expect.assertions(1)
    const wrapper = shallow(<EditFood />)
    const app = wrapper.instance()
    return app.handleSubmit().then(app => {
      expect(app.state().redirect).toBe(true)
    })
  })
})
