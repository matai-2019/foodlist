import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Search } from 'semantic-ui-react'
import { setSearchTerm } from '../actions/search'
import { sortBy, FILTER } from '../actions/sort'
import request from 'superagent'
import { searchFood } from '../utils/sort'

class SearchBar extends Component {
  state = { isLoading: false, results: [], value: '' }

  handleChange = (e, { value }) => {
    this.setState({ isLoading: true, value })
    request.get('/api/v1/foods')
      .then(res => {
        this.setState({ results: searchFood(res.body, this.state.value), isLoading: false })
      })
  }

  handleResultSelect = (e, { result }) => {
    this.setState({ value: result.name })
    this.props.dispatch(sortBy(FILTER))
    this.props.dispatch(setSearchTerm(result.name))
  }

  resultRenderer = ({ id, name }) => (<div key={id} className='content'>
    {name && <div>{name}</div>}
  </div>)

  render () {
    const { isLoading, value, results } = this.state
    return (
      <Search loading={isLoading} onSearchChange={this.handleChange} results={results}
        value={value} onResultSelect={this.handleResultSelect} resultRenderer={this.resultRenderer} />
    )
  }
}

export default connect()(SearchBar)
