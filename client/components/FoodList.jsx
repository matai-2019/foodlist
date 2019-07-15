import React from 'react'
import { connect } from 'react-redux'

import { getFoods } from '../actions/foods'
import { getCategory } from '../actions/category'
import { SORT_ALPHABETICAL_ASCENDING, SORT_WATER_USAGE_DESCENDING, SORT_WATER_USAGE_ASCENDING, SORT_CARBON_OUTPUT_DESCENDING } from '../actions/sort'
import Food from './Food'
import SortListDropdown from './SortListDropdown'
import CategoriesListDropdown from './CategoriesListDropdown'
import { sortAlphabeticalAscending, sortWaterUsageDescending, sortWaterUsageAscending, sortCarbonDescending } from '../utils/sort'
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
    case SORT_ALPHABETICAL_ASCENDING:
      return {
        foods: sortAlphabeticalAscending(foods),
        info
      }
    case SORT_WATER_USAGE_DESCENDING:
      return {
        foods: sortWaterUsageDescending(foods),
        info
      }
    case SORT_WATER_USAGE_ASCENDING:
      return {
        foods: sortWaterUsageAscending(foods),
        info
      }

    case SORT_CARBON_OUTPUT_DESCENDING:
      return {
        foods: sortCarbonDescending(foods),
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
