import React from 'react'
import { Dropdown } from 'semantic-ui-react'
import { getCategories } from '../actions/categories'
import { connect } from 'react-redux'

class CategoriesListDropdown extends React.Component {
  render () {
    const { categories } = this.props
    return (
      <Dropdown text="Pick a category">
        <Dropdown.Menu>
          <Dropdown.Item>Fruits</Dropdown.Item>
          <Dropdown.Item>Vegetables</Dropdown.Item>
          <Dropdown.Item>Grains, beans, and legumes</Dropdown.Item>
          <Dropdown.Item>Fish</Dropdown.Item>
          <Dropdown.Item>Meat</Dropdown.Item>
          <Dropdown.Item>Animal byproducts</Dropdown.Item>
          {categories && categories.map(category =>
            <Dropdown.Item key={category.id}>{category.name}</Dropdown.Item>
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
