import React from 'react'
import { Dropdown } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { getCategory } from '../actions/category'
import { getCategories } from '../actions/categories'

class CategoriesListDropdown extends React.Component {
  state = {
    category: null
  }

  componentDidMount () {
    if (this.props.categories.length === 0) {
      this.props.getCategories()
    }
  }

  regex = /( |, )/gi;

  handleClick = (name) => {
    return () => {
      this.setState({ category: name })
      this.props.getCategory(name)
    }
  }

  render () {
    return (
      <Dropdown text={this.state.category || 'Pick a Category'}>
        <Dropdown.Menu>
          <Dropdown.Header icon='tags' content='Filter by Category' />
          {this.props.categories.map(({ id, name }) =>
            <Dropdown.Item key={id} onClick={this.handleClick(name)}>
              <Link to={`/category/${name.replace(this.regex, '-')}`} style={{ color: 'black' }}>{name}</Link>
            </Dropdown.Item>
          )}
          <Dropdown.Item>
            <Link to='/'>All</Link>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    )
  }
}

const mapStateToProps = state => {
  return {
    categories: state.categories
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getCategories: () => dispatch(getCategories()),
    getCategory: (category) => dispatch(getCategory(category))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoriesListDropdown)
