import React from 'react'
import { connect } from 'react-redux'
import { HorizontalBar } from 'react-chartjs-2'

class Graph extends React.Component {
  data = {
    labels: this.props.foods.map(food => {
      return food.name
    }),
    datasets: [
      {
        label: 'Carbon Output (Kilogram / 10000 Calories)',
        backgroundColor: 'red',
        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
        hoverBorderColor: 'rgba(255,99,132,1)',
        data: this.props.foods.map(food => {
          return food.carbonOutput
        })
      },
      {
        label: 'Water Usage (Litres / Kilogram)',
        backgroundColor: 'green',
        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
        hoverBorderColor: 'rgba(255,99,132,1)',
        data: this.props.foods.map(food => {
          return food.waterUsage
        })
      }
    ]
  }

  render () {
    return (
      <>
      <div className="chart-container">
        <HorizontalBar data={ this.data }/>
      </div>
      </>
    )
  }
}

const MapStateToProps = state => {
  return {
    foods: state.foods
  }
}

export default connect(MapStateToProps)(Graph)
