import { SORT_AZ, SORT_CARBON_HIGH } from '../../../client/actions/sort'
import sortReducer from '../../../client/reducers/sort'

describe('Tests given actions into sortReducer', () => {
  it('returns a given sortType SORT_AZ', () => {
    const expected = SORT_AZ

    const currentState = {
      sortType: ''
    }

    const action = {
      type: SORT_AZ
    }

    const actual = sortReducer(currentState, action)
    expect(actual).toBe(expected)
  })

  it('returns a given sortType SORT_CARBON_HIGH', () => {
    const expected = SORT_CARBON_HIGH

    const currentState = {
      sortType: ''
    }

    const action = {
      type: SORT_CARBON_HIGH
    }

    const actual = sortReducer(currentState, action)
    expect(actual).toBe(expected)
  })
})
