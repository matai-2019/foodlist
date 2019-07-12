import {
  GET_FOODS_PENDING,
  GET_FOODS_SUCCESS,
  GET_FOODS_ERROR
} from './../actions/foods'
import {
  GET_FOOD_DETAILS_PENDING,
  GET_FOOD_DETAILS_SUCCESS,
  GET_FOOD_DETAILS_ERROR
} from './../actions/foodDetails'
import {
  GET_CATEGORIES_PENDING,
  GET_CATEGORIES_SUCCESS,
  GET_CATEGORIES_ERROR
} from './../actions/categories'

export default function infoReducer(state = { pending: true }, action) {
  switch (action.type) {
    case GET_FOODS_PENDING:
    case GET_FOOD_DETAILS_PENDING:
    case GET_CATEGORIES_PENDING:
      return {
        ...state,
        pending: true
      }
    case GET_FOODS_SUCCESS:
    case GET_FOOD_DETAILS_SUCCESS:
    case GET_CATEGORIES_SUCCESS:
      return {
        ...state,
        pending: false,
        error: null
      }
    case GET_FOODS_ERROR:
    case GET_FOOD_DETAILS_ERROR:
    case GET_CATEGORIES_ERROR:
      return {
        ...state,
        pending: false,
        error: action.message
      }
    default:
      return state
  }
}
