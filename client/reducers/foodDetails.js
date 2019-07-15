import { GET_FOOD_DETAILS_SUCCESS } from '../actions/foodDetails'

export default function foodDetailsReducer (state = {}, action) {
  switch (action.type) {
    case GET_FOOD_DETAILS_SUCCESS:
      return action.foodDetails

    default:
      return state
  }
}
