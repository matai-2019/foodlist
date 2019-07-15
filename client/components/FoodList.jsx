import React from 'react'
import { connect } from 'react-redux'
import { Grid } from 'semantic-ui-react'
import { getFoods } from '../actions/foods'
import { getCategory } from '../actions/category'
import { SORT_AZ, SORT_WATER_HIGH } from '../actions/sort'
import Food from './Food'
import SortListDropdown from './SortListDropdown'
import CategoriesListDropdown from './CategoriesListDropdown'
import { sortAZ, sortHighLowWater } from '../utils/sort'
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
          <Grid columns={3} stackable
          >
            <Grid.Row verticalAlign="middle">
              <Grid.Column >
                {!this.props.match.path.includes('category') &&
              <CategoriesListDropdown />}
              </Grid.Column>
              <Grid.Column>
                <SortListDropdown />
              </Grid.Column>
              <Grid.Column>
                <SearchBar />
              </Grid.Column>
            </Grid.Row>
          </Grid>
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

    default:
      return {
        foods,
        info
      }
  }
}

export default connect(mapStateToProps)(FoodList)
