import {
  GET_FOOD_DETAILS_SUCCESS,
  GET_FOOD_DETAILS_ERROR,
  GET_FOOD_DETAILS_PENDING } from '../../../client/actions/foodDetails'

import foodDetailsReducer from '../../../client/reducers/foodDetails'

const mockDetails = [{
  id: 1,
  name: 'Turkey',
  category: 'meat',
  carbon_output: 500,
  water_usage: 50
}, {
  id: 2,
  name: 'Chicken',
  category: 'meat',
  carbon_output: 300,
  water_usage: 30
}]

describe('foodDetailsReducer', () => {
  it('returns default state without any action cases', () => {
    const action = { type: 'GET_NO_CASE_MATCH', action: { name: 'noCaseMatch' } }
    const actual = foodDetailsReducer(undefined, action)
    expect({}).toBe(actual)
  })
})
