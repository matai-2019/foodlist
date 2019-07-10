import React from 'react'

import { Button, Form } from 'semantic-ui-react'

const options = [
  { id: 1, name: 'Fruits' },
  { id: 2, name: 'Vegetables' },
  { id: 3, name: 'Grains, beans, and legumes' },
  { id: 4, name: 'Fish' },
  { id: 5, name: 'Meat' },
  { id: 6, name: 'Animal byproducts' }
]


// [
//   { key: 'm', text: 'Male', value: 'male' },
//   { key: 'f', text: 'Female', value: 'female' },
//   { key: 'o', text: 'Other', value: 'other' },
// ]


export default class AddFood extends React.Component {
  state = {
    name: '',
    food_group_id: null,
    carbon_output: null,
    water_usage: null
  }

  render() {
    return (
      <Form>
        <Form.Field>
          <label>Name</label>
          <input name='name' placeholder='food name' />
        </Form.Field>
        <Form.Field label='Food group' name='food_group_id' control='select'>
          {options.map(el => <option key={el.id} value={el.id}>{el.name}</option>)}
        </Form.Field>
        <Form.Field>
          <label>Carbon output</label>
          <input name='carbon_output' />
        </Form.Field>
        <Form.Field>
          <label>Water usage</label>
          <input name='water_usage' />
        </Form.Field>
        <Button type='submit'>Submit</Button>
      </Form>
    )
  }
}