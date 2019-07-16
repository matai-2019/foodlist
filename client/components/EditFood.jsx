import React from 'react'
import { Redirect } from 'react-router-dom'
import { Header, Form, Input, Select, Button } from 'semantic-ui-react'
import { connect } from 'react-redux'

import { editFood } from '../api/api'
import { connect } from 'react-redux';
import { getFood } from '../actions/foodDetails'
import { editFoodError } from '../actions/updateFoodErrors'


class EditFood extends React.Component {
  state = {
    id: 1,
    name: 'Orange',
    food_group: 'fruits',
    carbon_output: 101,
    water_usage: 88,
    redirect: false
  }

  componentDidMount() {
    const { dispatch, match: { params: { foodId } } } = this.props
    Number(foodId)
    const food = dispatch(getFood(foodId)) // HOW TO GET FOODDETAILS IN MY PROPS AFTER CALLING DISPATCH?
    console.log('mounted', food)
    food ? this.setState(this.props.foodDetails) : 'error'
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = () => {
    return editFood(this.state)
      .then(() => this.setState({
        redirect: true
      }))
      .catch(err => {
        this.props.dispatch(editFoodError(err.message))
      })
  }

  render() {
    return this.state.redirect ? (<Redirect to={{ pathname: '/' }} />) : (
      <>
        <Header as="h1">Edit Food</Header>
        <Form>
          <Form.Group widths='equal'>
            <Form.Field type="text" name="name" control={Input} label='Name :' value={this.state.name} />
            <Form.Field type="text" name="food_group" control={Select} options={[{ pls: 'none' }]} label='Food Group:' />
          </Form.Group>
          <Form.Group widths='equal'>
            <Form.Field type="number" name="carbon_output" label='Carbon Output: ' control={Input} value={this.state.carbon_output} onChange={this.handleChange} />
            <Form.Field type="number" name="water_usage" label='Water Usage: ' control={Input} value={this.state.water_usage} onChange={this.handleChange} />
          </Form.Group>

          <Button type='submit'>Submit</Button>
        </Form>
      </>
    )
  }
}
const mapStateToProps = ({ foodDetails }) => {
  return { foodDetails }
}

export default connect(mapStateToProps)(EditFood)
