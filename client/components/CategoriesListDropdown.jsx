import React from 'react'
import { Dropdown } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { getCategories } from '../actions/categories'

class CategoriesListDropdown extends React.Component {
  componentDidMount () {
    if (this.props.categories.length === 0) {
      this.props.getCategories()
    }
  }

  render () {
    return (
      <Dropdown text="Pick a category">
        <Dropdown.Menu>
          {this.props.categories.map(({ id, name }) =>
            <Dropdown.Item key={id}>
              <Link to={`/category/${name}`}>{name}</Link>
            </Dropdown.Item>
          )}
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
    getCategories: () => dispatch(getCategories())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoriesListDropdown)
