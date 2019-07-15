import React from 'react'
import { connect } from 'react-redux'

import { getFoods } from '../actions/foods'
import { getCategory } from '../actions/category'
import Food from './Food'
import SortListDropdown from './SortListDropdown'
import CategoriesListDropdown from './CategoriesListDropdown'
import SearchBar from './SearchBar'

class FoodList extends React.Component {
  componentDidMount () {
    const { match, dispatch } = this.props
    const category = match.category
    category
      ? dispatch(getCategory(category))
      : dispatch(getFoods())
  }

  render () {
    const { foods, info: { pending, error } } = this.props

    if (pending) {
      return <div>LOADING...</div>
    } else {
      return (
      <>
        {!this.props.match.path.includes('category') &&
        <CategoriesListDropdown /> } &nbsp;
        <SortListDropdown /> &nbsp;
        <SearchBar/>
        {error && <div>{error}</div>}
        {foods.map(food =>
          <Food key={food.id} food={food} />)}
      </>
      )
    }
  }
}

const mapStateToProps = state => {
  return {
    foods: state.foods,
    info: state.info
  }
}

export default connect(mapStateToProps)(FoodList)
