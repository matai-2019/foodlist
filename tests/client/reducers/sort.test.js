import { SORT_ALPHABETICAL_ASCENDING,
  SORT_CARBON_OUTPUT_DESCENDING,
  SORT_CARBON_OUTPUT_ASCENDING,
  SORT_WATER_USAGE_DESCENDING,
  SORT_WATER_USAGE_ASCENDING
} from '../../../client/actions/sort'
import sortReducer from '../../../client/reducers/sort'

describe('Tests given actions into sortReducer', () => {
  it('returns a given sortType SORT_ALPHABETICAL_ASCENDING', () => {
    const expected = SORT_ALPHABETICAL_ASCENDING
    const currentState = {
      sortType: ''
    }
    const action = {
      type: SORT_ALPHABETICAL_ASCENDING
    }
    const actual = sortReducer(currentState, action)
    expect(actual).toBe(expected)
  })
  it('returns a given sortType SORT_CARBON_OUTPUT_DESCENDING', () => {
    const expected = SORT_CARBON_OUTPUT_DESCENDING
    const currentState = {
      sortType: ''
    }
    const action = {
      type: SORT_CARBON_OUTPUT_DESCENDING
    }
    const actual = sortReducer(currentState, action)
    expect(actual).toBe(expected)
  })
  it('returns a given sortType SORT_CARBON_OUTPUT_ASCENDING', () => {
    const expected = SORT_CARBON_OUTPUT_ASCENDING
    const currentState = {
      sortType: ''
    }
    const action = {
      type: SORT_CARBON_OUTPUT_ASCENDING
    }
    const actual = sortReducer(currentState, action)
    expect(actual).toBe(expected)
  })
  it('returns a given sortType SORT_WATER_USAGE_DESCENDING', () => {
    const expected = SORT_WATER_USAGE_DESCENDING
    const currentState = {
      sortType: ''
    }
    const action = {
      type: SORT_WATER_USAGE_DESCENDING
    }
    const actual = sortReducer(currentState, action)
    expect(actual).toBe(expected)
  })
  it('returns a given sortType SORT_WATER_USAGE_ASCENDING', () => {
    const expected = SORT_WATER_USAGE_ASCENDING
    const currentState = {
      sortType: ''
    }
    const action = {
      type: SORT_WATER_USAGE_ASCENDING
    }
    const actual = sortReducer(currentState, action)
    expect(actual).toBe(expected)
  })
})
