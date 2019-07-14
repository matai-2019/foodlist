import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { getFoods } from '../actions/foods'
import Food from './Food'
import SortListDropdown from './SortListDropdown'

class FoodList extends React.Component {
  componentDidMount () {
    this.props.getFoods()
  }

  render () {
    const { foods, info: { pending, error } } = this.props

    if (pending) {
      return <div>LOADING...</div>
    } else {
      return (
      <>
        <SortListDropdown />
         {!this.props.match.path.includes('category') &&
         (<ul>
           <li><Link to="category/vegetables">Vegetables</Link></li>
           <li><Link to="category/meat">Meat</Link></li>
         </ul>)}
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

const mapDispatchToProps = dispatch => {
  return {
    getFoods: () => dispatch(getFoods())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FoodList)
