import { GET_FOODS_SUCCESS } from './../actions/foods'
import { GET_CATEGORIES_SUCCESS } from './../actions/categories'
import { GET_CATEGORY_SUCCESS } from './../actions/category'

export default function foodReducer (state = [], action) {
  switch (action.type) {
    case GET_FOODS_SUCCESS:
      return action.foods
    case GET_CATEGORY_SUCCESS:
      return action.category
    case GET_CATEGORIES_SUCCESS:
      return action.category
    default:
      return state
  }
}
