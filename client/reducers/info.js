import {
  GET_FOODS_PENDING,
  GET_FOODS_SUCCESS,
  GET_FOODS_ERROR } from './../actions/foods'
import {
  GET_FOOD_DETAILS_PENDING,
  GET_FOOD_DETAILS_SUCCESS,
  GET_FOOD_DETAILS_ERROR } from './../actions/foodDetails'

export default function infoReducer (state = { pending: true }, action) {
  switch (action.type) {
    case GET_FOODS_PENDING:
      return {
        ...state,
        pending: true
      }

    case GET_FOODS_SUCCESS:
      return {
        ...state,
        pending: false,
        error: null
      }

    case GET_FOODS_ERROR:
      return {
        ...state,
        pending: false,
        error: action.message
      }
    case GET_FOOD_DETAILS_PENDING:
      return {
        ...state,
        pending: true
      }

    case GET_FOOD_DETAILS_SUCCESS:
      return {
        ...state,
        pending: false,
        error: null
      }

    case GET_FOOD_DETAILS_ERROR:
      return {
        ...state,
        pending: false,
        error: action.message
      }

    default:
      return state
  }
}
