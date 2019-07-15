import React from 'react'
import { connect } from 'react-redux'
import { Dropdown, Menu } from 'semantic-ui-react'
import sortBy from '../actions/sort'

class SortListDropdown extends React.Component {
  options = [
    { key: 1, text: 'A-Z', value: 'SORT_AZ' },
    { key: 2, text: 'Water Usage High-Low', value: 'SORT_WATER_HIGH' },
    { key: 3, text: 'Water Usage Low-High', value: 'SORT_WATER_LOW' },
    { key: 4, text: 'Carbon Output High-Low', value: 'CARBON_OUTPUT_HIGH' },
    { key: 5, text: 'Carbon Output Low-High', value: 'CARBON_OUTPUT_LOW' }
  ]

  handleChange = (e) => {
    this.props.dispatch(sortBy(e.target.value))
  }

  render () {
    return (
      <>
        <Menu onChange={this.handleChange} compact>
          <Dropdown text='Sort Through Foods' options={this.options} simple item />
        </Menu>
      </>
    )
  }
}

export default connect()(SortListDropdown)
