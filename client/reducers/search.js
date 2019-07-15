import { SET_SEARCH_TERM } from '../actions/search'

export default function search (state = '', action) {
  switch (action.type) {
    case SET_SEARCH_TERM:
      return action.searchTerm

    default:
      return state
  }
}
