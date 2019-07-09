import React from 'react'
import { connect } from 'react-redux'
import { getFoods } from '../actions/foods'
import Food from './Food'

class FoodList extends React.Component {
  componentDidMount () {
    this.props.getFoods()
  }

  render () {
    const { foods, info: { pending, error } } = this.props

    if (pending) {
      return <div>LOADING...</div>
    }

    return (
      <>
    {error && <div>{error}</div>}
    <ul>
      {foods.map(food =>
        <Food key={food.id} food={food} />)}
    </ul>

    </>
    )
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
