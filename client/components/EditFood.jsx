import React from 'react'
import { Redirect } from 'react-router-dom'

import { editFood } from '../api/api'

export default class EditFood extends React.Component {
  state = {
    id: 1,
    name: 'Orange',
    food_group: 'fruits',
    carbon_output: 101,
    water_usage: 88,
    redirect: false
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
        throw new Error(`Oh no! ${err.message}`)
      })
  }

  render () {
    return this.state.redirect ? <Redirect to={{ pathname: `/details/:${this.state.id}` }} />
      : <>
          <form>
            Name: <input defaultValue={this.state.name} />
            Food Group:
            <select name="food_group" onChange={this.handleChange}>
              <option value="Fruits">Fruits</option>
              <option value="Vegetables">Vegetables</option>
              <option value="Grains, beans, and legumes">Grains, beans, and legumes</option>
              <option value="Fish">Fish</option>
              <option value="Meat">Meat</option>
              <option value="Animal Byproducts">Animal Byproducts</option>
            </select>
            Carbon Output: <input name="carbon_output" value={this.state.carbon_output} onChange={this.handleChange} />
            Water Usage:  <input name="water_usage" value={this.state.water_usage} onChange={this.handleChange} />
          </form>
          <button type="submit">Submit</button>
        </>
  }
}
