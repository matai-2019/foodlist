import { SET_SEARCH_TERM } from '../../../client/actions/search'
import searchReducer from '../../../client/reducers/search'

describe('searchReducer', () => {
  it('returns the default state if no state or action given', () => {
    const initialState = undefined
    const expected = ''
    const action = {
      type: undefined
    }
    const actual = searchReducer(initialState, action)
    expect(actual).toBe(expected)
  })

  it('returns unchanged state on unexpected action type', () => {
    const initialState = 'test'
    const action = {
      type: 'GET_NO_CASE_MATCH',
      searchTerm: 'noCaseMatch'
    }
    const actual = searchReducer(initialState, action)
    expect(actual).toBe(initialState)
  })

  it('returns the given searchTerm', () => {
    const searchTerm = 'test'
    const expected = searchTerm

    const initialState = ''
    const action = {
      type: SET_SEARCH_TERM,
      searchTerm
    }
    const actual = searchReducer(initialState, action)
    expect(actual).toBe(expected)
  })
})
