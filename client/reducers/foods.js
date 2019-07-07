import { GET_FOODS_SUCCESS } from './../actions/foods'

export default function foodReducer (state = [], action) {
  switch (action.type) {
    case GET_FOODS_SUCCESS:
      return action.foods

    default:
      return state
  }
}
