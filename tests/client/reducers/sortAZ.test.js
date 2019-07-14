import { SORT_AZ } from '../../client/actions/sort'
import { sortReducer } from '../../client/reducers/sort'

describe('Tests for SortAZ in reducer', () => {
  it('SORTAZ returns new sortType az', () => {
    const expected = {
      sortType: 'az'
    }

    const currentState = {
      sortType: 'carbonHigh'
    }

    const action = {
      type: SORT_AZ
    }

    const actual = sortReducer(currentState, action)
    expect(actual).toBe(expected)
  })
})
