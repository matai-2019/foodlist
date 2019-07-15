import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Input } from 'semantic-ui-react'
import { setSearchTerm } from '../actions/search'

class SearchBar extends Component {
  state = {
    searchedFood: ''
  }
  handleChange = evt => {
    this.setState({ searchedFood: evt.target.value })
  }
  handleSearch = () => {
    this.props.dispatch(setSearchTerm(this.state.searchedFood))
  }
  render = () => {
    return (
    <>
      <Input className="ui action input">
        <input type="text" placeholder="Search..." onChange={this.handleChange}/>
        <button className="ui button" onClick={this.handleSearch}>Search</button>
      </Input>
    </>
    )
  }
}

export default connect()(SearchBar)
