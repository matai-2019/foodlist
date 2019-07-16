import { SORT_ALPHABETICAL_ASCENDING,
  SORT_CARBON_OUTPUT_DESCENDING,
  SORT_CARBON_OUTPUT_ASCENDING,
  SORT_WATER_USAGE_DESCENDING,
  SORT_WATER_USAGE_ASCENDING,
  FILTER
} from '../actions/sort'

export default function sortReducer (state = '', action) {
  switch (action.type) {
    case SORT_ALPHABETICAL_ASCENDING:
    case SORT_CARBON_OUTPUT_DESCENDING:
    case SORT_CARBON_OUTPUT_ASCENDING:
    case SORT_WATER_USAGE_DESCENDING:
    case SORT_WATER_USAGE_ASCENDING:
    case FILTER:
      return action.type
    default:
      return state
  }
}
