import { SORT_AZ } from '../actions/sort'

export default function sortReducer (state = '', action) {
  switch (action.type) {
    case SORT_AZ:
      return action.type
    default:
      return state
  }
}
