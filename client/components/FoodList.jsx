import React from 'react'
import { connect } from 'react-redux'
import { Grid } from 'semantic-ui-react'
import { getFoods } from '../actions/foods'
import { getCategory } from '../actions/category'
import { SORT_AZ, SORT_WATER_HIGH, SORT_WATER_LOW, SORT_CARBON_HIGH, FILTER } from '../actions/sort'
import Food from './Food'
import SortListDropdown from './SortListDropdown'
import CategoriesListDropdown from './CategoriesListDropdown'
import { sortAZ, sortHighLowWater, sortLowHighWater, sortHighLowCarbon, searchFood } from '../utils/sort'
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
      return {
        foods: searchFood(foods, search)
      }
    case SORT_AZ:
      return {
        foods: sortAZ(foods)
      }
    case SORT_WATER_HIGH:
      return {
        foods: sortHighLowWater(foods)
      }
    case SORT_WATER_LOW:
      return {
        foods: sortLowHighWater(foods)
      }
    case SORT_CARBON_HIGH:
      return {
        foods: sortHighLowCarbon(foods)
      }

    default:
      return {
        foods
      }
  }
}

export default connect(mapStateToProps)(FoodList)
