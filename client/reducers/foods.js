import { GET_FOODS_SUCCESS } from './../actions/foods'
import { GET_CATEGORIES_SUCCESS } from './../actions/categories'

export default function foodReducer (state = [], action) {
  switch (action.type) {
    case GET_FOODS_SUCCESS:
      return action.foods
    default:
      return state
  }
}

export default function categoryReducer (state = {}, action) {
  switch (action.type) {
    case GET_CATEGORIES_SUCCESS:
      return action.categories
    default:
      return state
  }
}
