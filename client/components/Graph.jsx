import React from 'react'
import { connect } from 'react-redux'
import {
  BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

class Graph extends React.Component {

  data = this.props.foods.map(food => {
    { name: food.name, }
  })

  render () {
    return (
      name
    )
  }
}

const MapStateToProps = state => {
  return {
    foods: state.foods
  }
}

export default connect(MapStateToProps)(Graph)
