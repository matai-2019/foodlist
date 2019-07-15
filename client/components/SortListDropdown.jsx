import React from 'react'
import { connect } from 'react-redux'
import { Dropdown, Menu } from 'semantic-ui-react'

import sortAZ from '../utils/sortAZ'

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

const mapStateToProps = state => {
  if (state.sortType === 'SORT_AZ') {
    return {
      sortType: state.sortType,
      foods: sortAZ(state.foods)
    }
  } else {
    return {
      sortType: state.sortType,
      foods: state.foods
    }
  }
}

export default connect(mapStateToProps)(SortListDropdown)
