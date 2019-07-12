import React from 'react'
import { Dropdown } from 'semantic-ui-react'
import { getCategories } from '../actions/categories'
import { connect } from 'react-redux'

class DropDownMenu extends React.Component {
  render () {
    const { name, categories } = this.props
    return (
      <Dropdown text={name}>
        <Dropdown.Menu>
          <Dropdown.Header icon='food' content='Pick Category' />
          <Dropdown.Item>Fruits</Dropdown.Item>
          <Dropdown.Item>Vegetables</Dropdown.Item>
          <Dropdown.Item>Grains, Beans, and Legumes</Dropdown.Item>
          <Dropdown.Item>Fish</Dropdown.Item>
          <Dropdown.Item>Meat</Dropdown.Item>
          <Dropdown.Item>Animal bybroducts</Dropdown.Item>
          {
            categories && categories.map(category => {
              return <Dropdown.Item key={category.id}>{category.name}</Dropdown.Item>
            })
          }
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

export default connect(mapStateToProps, mapDispatchToProps)(DropDownMenu)
