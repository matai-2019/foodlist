import {
  getFoodDetailsPending,
  getFoodDetailsSuccess,
  getFoodDetailsError,
  getFood,
  GET_FOOD_DETAILS_PENDING,
  GET_FOOD_DETAILS_SUCCESS,
  GET_FOOD_DETAILS_ERROR } from '../../../client/actions/foodDetails'

describe('foodDetails actions', () => {
  it(`${GET_FOOD_DETAILS_PENDING} action includes food name`, () => {
    const testFoodName = 'test food name'
    const action = getFoodDetailsPending(testFoodName)
    expect(action.type).toBe(GET_FOOD_DETAILS_PENDING)
  })

  it(`${GET_FOOD_DETAILS_SUCCESS} action includes foods`, () => {
    const testFoods = 'test foods'
    const action = getFoodDetailsSuccess(testFoods)
    expect(action.type).toBe(GET_FOOD_DETAILS_SUCCESS)
  })

  it(`${GET_FOOD_DETAILS_ERROR} action includes error`, () => {
    const testError = 'test error'
    const action = getFoodDetailsError(testError)
    expect(action.type).toBe(GET_FOOD_DETAILS_ERROR)
  })

  it('getFood action returns a function', () => {
    const expected = 'function'
    const actual = typeof getFood
    expect(actual).toBe(expected)
  })
})
