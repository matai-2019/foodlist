import { DELETE_FOOD_ERROR } from './../actions/updateFoodErrors'

export default function deleteFoodReducer (state = { pending: true }, action) {
  switch (action.type) {
    case DELETE_FOOD_ERROR:
      return {
        ...state,
        pending: false,
        error: action.message
      }
    default:
      return state
  }
}
