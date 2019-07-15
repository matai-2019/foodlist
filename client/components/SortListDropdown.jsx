import React from 'react'
import { connect } from 'react-redux'
import { Dropdown, Menu } from 'semantic-ui-react'

class SortListDropdown extends React.Component {
  state ={
    text: 'Sort by'
  }

  options = [
    { key: 1, text: 'A-Z', value: 'SORT_AZ' },
    { key: 2, text: 'Water Usage High-Low', value: 'SORT_WATER_HIGH' },
    { key: 3, text: 'Water Usage Low-High', value: 'SORT_WATER_LOW' },
    { key: 4, text: 'Carbon Output High-Low', value: 'CARBON_OUTPUT_HIGH' },
    { key: 5, text: 'Carbon Output Low-High', value: 'CARBON_OUTPUT_LOW' }
  ]

  onChangeHandler = (e) => {
    this.setState({
      text: e.target.value
    })
  }

  render () {
    return (
      <>
      <Dropdown onChange={this.onChangeHandler} text={this.state.text} options={this.options} />
      </>
    )
  }
}

export default connect()(SortListDropdown)
