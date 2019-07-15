import React from 'react'
import { connect } from 'react-redux'
import { Dropdown } from 'semantic-ui-react'
import { SORT_AZ,
  SORT_CARBON_HIGH,
  SORT_CARBON_LOW, SORT_WATER_HIGH,
  SORT_WATER_LOW,
  sortBy } from '../actions/sort'

class SortListDropdown extends React.Component {
  state ={
    text: 'Sort by'
  }

  options = [
    { text: 'A-Z', value: SORT_AZ },
    { text: 'Water Usage High-Low', value: SORT_WATER_HIGH },
    { text: 'Water Usage Low-High', value: SORT_WATER_LOW },
    { text: 'Carbon Output High-Low', value: SORT_CARBON_HIGH },
    { text: 'Carbon Output Low-High', value: SORT_CARBON_LOW }
  ]

  onChangeHandler = (e, data) => {
    this.setState({
      text: e.target.textContent
    })
    this.props.dispatch(sortBy(data.value))
  }

  render () {
    return (
      <>
      <Dropdown onChange={this.onChangeHandler} text={this.state.text} options={this.options} />
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    sortType: state.sortType
  }
}

export default connect(mapStateToProps)(SortListDropdown)
