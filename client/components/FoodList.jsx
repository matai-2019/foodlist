import React from 'react'
import { connect } from 'react-redux'
import { Grid } from 'semantic-ui-react'
import { getFoods } from '../actions/foods'
import { getCategory } from '../actions/category'
import {
  SORT_ALPHABETICAL_ASCENDING,
  SORT_WATER_USAGE_DESCENDING,
  SORT_WATER_USAGE_ASCENDING,
  SORT_CARBON_OUTPUT_DESCENDING,
  SORT_CARBON_OUTPUT_ASCENDING,
  FILTER
} from '../actions/sort'
import Food from './Food'
import SortListDropdown from './SortListDropdown'
import CategoriesListDropdown from './CategoriesListDropdown'
import { sortAlphabeticalAscending,
  sortWaterUsageDescending,
  sortWaterUsageAscending,
  sortCarbonDescending,
  sortCarbonAscending,
  searchFood
} from '../utils/sort'
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
    const { foods } = this.props
    return (
        <>
          <Grid columns={3} stackable
          >
            <Grid.Row verticalAlign="middle">
              <Grid.Column >
                <CategoriesListDropdown />
              </Grid.Column>
              <Grid.Column>
                <SortListDropdown />
              </Grid.Column>
              <Grid.Column>
                <SearchBar />
              </Grid.Column>
            </Grid.Row>
          </Grid>
          {foods.map(food =>
            <Food key={food.id} food={food} />)}
        </>
    )
  }
}

const mapStateToProps = ({ sortType, foods, search }) => {
  switch (sortType) {
    case FILTER:
      return { foods: searchFood(foods, search) }
    case SORT_ALPHABETICAL_ASCENDING:
      return {
        foods: sortAlphabeticalAscending(foods) }
    case SORT_WATER_USAGE_DESCENDING:
      return {
        foods: sortWaterUsageDescending(foods) }
    case SORT_WATER_USAGE_ASCENDING:
      return {
        foods: sortWaterUsageAscending(foods)
      }
    case SORT_CARBON_OUTPUT_DESCENDING:
      return {
        foods: sortCarbonDescending(foods)
      }
    case SORT_CARBON_OUTPUT_ASCENDING:
      return {
        foods: sortCarbonAscending(foods)
      }

    default:
      return {
        foods
      }
  }
}

export default connect(mapStateToProps)(FoodList)
