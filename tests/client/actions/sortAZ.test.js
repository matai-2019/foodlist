import { SORT_AZ, sortBy } from '../../../client/actions/sort'

describe('Tests for sort actions', () => {
  it('setSortType returns a given type', () => {
    const action = sortBy(SORT_AZ)
    expect(action.type).toBe(SORT_AZ)
  })

  it('setSortType returns a given type', () => {
    const action = sortBy(SORT_AZ)
    expect(action.type).toBe(SORT_AZ)
  })
})
