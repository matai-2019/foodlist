import {
  GET_CATEGORIES_PENDING,
  GET_CATEGORIES_SUCCESS,
  GET_CATEGORIES_ERROR,
  getCategoriesPending,
  getCategoriesSuccess,
  getCategoriesError
} from '../../../client/actions/categories'

describe('categories actions', () => {
  it('GET_CATEGORIES_SUCCESS returns Categories', () => {
    const testCategories = [{}, {}, {}]
    const action = getCategoriesSuccess(testCategories)
    expect(action.type).toBe(GET_CATEGORIES_SUCCESS)
    expect(action.categories.length).toBe(3)
  })

  it('GET_CATEGORIES_ERROR returns an error message', () => {
    const errorMessage = 'Cannot get categories'
    const action = getCategoriesError(errorMessage)
    expect(action.type).toBe(GET_CATEGORIES_ERROR)
    expect(action.message).toMatch('Cannot get categories')
  })

  it('GET_CATEGORIES_PENDING works', () => {
    const action = getCategoriesPending()
    expect(action.type).toBe(GET_CATEGORIES_PENDING)
  })
})
