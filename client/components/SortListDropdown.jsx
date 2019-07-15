import React from 'react'
import { connect } from 'react-redux'
import { Dropdown } from 'semantic-ui-react'
import { SORT_ALPHABETICAL_ASCENDING,
  SORT_WATER_USAGE_DESCENDING,
  SORT_WATER_USAGE_ASCENDING,
  SORT_CARBON_OUTPUT_DESCENDING,
  SORT_CARBON_OUTPUT_ASCENDING,
  sortBy } from '../actions/sort'

class SortListDropdown extends React.Component {
  state ={
    text: 'Default'
  }

  options = [
    { key: 1, text: 'A-Z', value: SORT_ALPHABETICAL_ASCENDING },
    { key: 2, text: 'Water Usage High-Low', value: SORT_WATER_USAGE_DESCENDING },
    { key: 3, text: 'Water Usage Low-High', value: SORT_WATER_USAGE_ASCENDING },
    { key: 4, text: 'Carbon Output High-Low', value: SORT_CARBON_OUTPUT_DESCENDING },
    { key: 5, text: 'Carbon Output Low-High', value: SORT_CARBON_OUTPUT_ASCENDING }
  ]

  onChangeHandler = (e, data) => {
    this.setState({
      text: e.target.textContent
    })
    this.props.dispatch(sortBy(data.value))
  }

  render () {
    return (
      <span>
        <span style={{ marginRight: '0.5em' }}>Sort By :</span>
        <Dropdown
          onChange={this.onChangeHandler}
          text={this.state.text}
          options={this.options}
          labeled
        />
      </span>

    )
  }
}

const mapStateToProps = state => {
  return {
    sortType: state.sortType
  }
}

export default connect(mapStateToProps)(SortListDropdown)
