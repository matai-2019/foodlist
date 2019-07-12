import React from 'react'

export default class EditFood extends React.Component {
  state = {
    name: 'Orange',
    food_group: 'fruits',
    carbon_output: 101,
    water_usage: 88
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render () {
    return (
      <>
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
        Carbon Output: <input name="carbon_output" value={this.state.carbon_output} onChange={this.handleChange}/>
        Water Usage:  <input name="water_usage" value={this.state.water_usage} onChange={this.handleChange}/>
      </form>
      <button type="submit">Submit</button>
      </>
    )
  }
}
