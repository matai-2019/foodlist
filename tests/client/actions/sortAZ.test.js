import { SORT_AZ } from '../../client/actions/sort'

describe('Tests for SortAZ actions', () => {
  it('setSortType returns a sortType', () => {
    const action = sortByAZ()
    expect(action.type).toBe(SORT_AZ)
  })
})
