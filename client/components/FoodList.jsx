import React from 'react'
import { connect } from 'react-redux'

import { getFoods } from '../actions/foods'
import { getCategory } from '../actions/category'
import { SORT_AZ, SORT_WATER_HIGH, SORT_WATER_LOW } from '../actions/sort'
import Food from './Food'
import SortListDropdown from './SortListDropdown'
import CategoriesListDropdown from './CategoriesListDropdown'
import { sortAZ, sortHighLowWater, sortLowHighWater } from '../utils/sort'
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
          <CategoriesListDropdown /> &nbsp;
        <SortListDropdown /> &nbsp;
        <SearchBar />
          {error && <div>{error}</div>}
          {foods.map(food =>
            <Food key={food.id} food={food} />)}
        </>
      )
    }
  }
}

const mapStateToProps = ({ sortType, info, foods }) => {
  switch (sortType) {
    case SORT_AZ:
      return {
        foods: sortAZ(foods),
        info
      }
    case SORT_WATER_HIGH:
      return {
        foods: sortHighLowWater(foods),
        info
      }
    case SORT_WATER_LOW:
      return {
        foods: sortLowHighWater(foods),
        info
      }

    default:
      return {
        foods,
        info
      }
  }
}

export default connect(mapStateToProps)(FoodList)
