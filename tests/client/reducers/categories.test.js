import { GET_CATEGORIES_SUCCESS } from '../../../client/actions/categories'
import categoriesReducer from '../../../client/reducers/'

describe('reducer', () => {
  it('getCategoriesSuccess', () => {
    // arrange
    const testState = [
      { id: 1, name: 'Fruits' },
      { id: 2, name: 'Vegetables' },
      { id: 3, name: 'Grains, beans, and legumes' }
    ]
    const currentState = {
      categories: []
    }
    const action = {
      type: GET_CATEGORIES_SUCCESS,
      categories: testState
    }

    // act
    const newState = categoriesReducer(currentState, action)

    // assert
    expect(newState.categories).toBe(testState)
  })
})
