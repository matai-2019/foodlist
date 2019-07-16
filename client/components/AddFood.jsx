import React from 'react'
import { Redirect } from 'react-router-dom'
import { Button, Form, Container, Header } from 'semantic-ui-react'
import { connect } from 'react-redux'

import { addFood } from '../api/api'
import { addFoodError } from '../actions/updateFoodErrors'
import { getCategories } from '../actions/categories'

class AddFood extends React.Component {
  state = {
    redirect: false
  }

  componentDidMount () {
    this.props.dispatch(getCategories())
  }

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = () => {
    return addFood(this.state)
      .then(() => this.setState({
        redirect: true
      }))
      .catch(err => {
        this.props.dispatch(addFoodError(err.message))
      })
  }

  render () {
    return this.state.redirect
      ? <Redirect to={{ pathname: '/' }} />
      : <Container>
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
            control="select"
          >
            <option value="">Choose a food category</option>
            {this.props.categories.map(category =>
              <option key={category.id}
                value={category.id}>{category.name}</option>
            )}
          </Form.Field>
          <Form.Field>
            <label>Carbon output</label>
            <input type="number"
              onChange={this.handleInputChange}
              name="carbon_output"
              placeholder="Enter carbon output"
            />
          </Form.Field>
          <Form.Field>
            <label>Water usage</label>
            <input type="number"
              onChange={this.handleInputChange}
              name="water_usage"
              placeholder="Enter water usage"
            />
          </Form.Field>
          <Button onClick={this.handleSubmit} type="submit">Submit</Button>
        </Form>
      </Container>
  }
}

const mapStateToProps = state => {
  return {
    categories: state.categories
  }
}

export default connect(mapStateToProps)(AddFood)
