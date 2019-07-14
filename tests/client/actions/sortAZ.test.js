import { SORT_AZ, sortBy } from '../../../client/actions/sort'

describe('Tests for SortAZ actions', () => {
  it('setSortType returns a sortType', () => {
    const action = sortBy(SORT_AZ)
    expect(action.type).toBe(SORT_AZ)
  })
})
