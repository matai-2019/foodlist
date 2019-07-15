import { setSearchTerm, SET_SEARCH_TERM } from '../../../client/actions/search'

describe('search actions', () => {
  it(`setSearchTerm() returns ${SET_SEARCH_TERM}`, () => {
    const action = setSearchTerm()
    expect(action.type).toBe(SET_SEARCH_TERM)
  })

  it(`setSearchTerm() action includes searchTerm`, () => {
    const searchTerm = 'Lamb'
    const action = setSearchTerm(searchTerm)
    expect(action.searchTerm).toBe(searchTerm)
  })
})
