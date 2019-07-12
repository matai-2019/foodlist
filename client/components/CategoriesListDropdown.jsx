import React from 'react'
import { Dropdown } from 'semantic-ui-react'
import { getCategories } from '../actions/categories'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class CategoriesListDropdown extends React.Component {
  render () {
    let { categories } = this.props
    categories = categories ||
      [ { id: 1, name: 'Fruits' },
        { id: 2, name: 'Vegetables' },
        { id: 3, name: 'Grains, beans, and legumes' },
        { id: 4, name: 'Fish' },
        { id: 5, name: 'Meat' },
        { id: 6, name: 'Animal byproducts' } ]

    return (
      <Dropdown text="Pick a category">
        <Dropdown.Menu>
          {categories && categories.map(({ id, name }) =>
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
