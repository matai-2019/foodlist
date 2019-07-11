import React from 'react'
import { Button, Form, Container, Header } from 'semantic-ui-react'

const options = [
  { id: 1, name: 'Fruits' },
  { id: 2, name: 'Vegetables' },
  { id: 3, name: 'Grains, beans, and legumes' },
  { id: 4, name: 'Fish' },
  { id: 5, name: 'Meat' },
  { id: 6, name: 'Animal byproducts' }
]

export default class AddFood extends React.Component {
  state = {
    name: '',
    category_id: null,
    carbon_output: null,
    water_usage: null
  }

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render () {
    return (
      <Container>
        <div className="ui hidden divider"></div>
        <Header as="h1">Add a Food</Header>
        <Form>
          <Form.Field>
            <label>Name</label>
            <input onChange={this.handleInputChange}
              name="name"
              placeholder="Enter food name"
            />
          </Form.Field>
          <Form.Field onChange={this.handleInputChange}
            label="Food group"
            name="category_id"
            control="select">
            <option value="">Choose a food category</option>
            {options.map(el =>
              <option key={el.id} value={el.id}>{el.name}</option>
            )}
          </Form.Field>
          <Form.Field>
            <label>Carbon output</label>
            <input type="number"
              onChange={this.handleInputChange}
              name="carbon_output"
              placeholder="Enter carbon output" />
          </Form.Field>
          <Form.Field>
            <label>Water usage</label>
            <input type="number"
              onChange={this.handleInputChange}
              name="water_usage"
              placeholder="Enter water usage" />
          </Form.Field>
          <Button type="submit">Submit</Button>
        </Form>
      </Container>
    )
  }
}
