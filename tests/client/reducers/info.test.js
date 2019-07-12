import {
  getCategoriesSuccess,
  getCategoriesPending,
  getCategoriesError
} from '../../../client/actions/categories'

import {
  getFoodsSuccess,
  getFoodsPending,
  getFoodsError
} from '../../../client/actions/foods'

import infoReducer from '../../../client/reducers/'

describe('reducer', () => {
  it('getCatergoriesSuccess', () => {
    // arrange
    const testState = [
      { id: 1, name: 'Fruits' },
      { id: 2, name: 'Vegetables' },
      { id: 3, name: 'Grains, beans, and legumes' }
    ]
    const currentState = {
      categories: []
    }
    const action = getCategoriesSuccess(testState)

    // act
    const newState = infoReducer(currentState, action)

    // assert
    expect(newState.categories).toBe(testState)
  })

  it('getCatergoriesPending', () => {
    // arrange
    const expected = {
      info: {
        pending: true,
        error: 'ERR: derp'
      }
    }

    const currentState = {
      info: {
        pending: false,
        error: 'ERR: derp'
      }
    }
    const action = getCategoriesPending()

    // act
    const newState = infoReducer(currentState, action)

    // assert
    expect(newState.info.pending).toBe(expected.info.pending)
    expect(newState.info.error).toBe(expected.info.error)
  })
  it('getCategoriesError', () => {
    // arrange
    const expected = {
      info: {
        pending: false,
        error: 'ERR: derp'
      }
    }

    const currentState = {
      info: {
        pending: false,
        error: ''
      }
    }
    const action = getCategoriesError('ERR: derp')

    // act
    const newState = infoReducer(currentState, action)

    // assert
    expect(newState.info.error).toBe(expected.info.error)
  })
  it('getFoodsSuccess', () => {
    // arrange
    const expected = [
      { id: 1, name: 'Lamb', category_id: 5 },
      { id: 2, name: 'Beef', category_id: 5 },
      { id: 3, name: 'Turkey', category_id: 5 }
    ]
    const currentState = {
      foods: []
    }
    const action = getFoodsSuccess(expected)

    // act
    const newState = infoReducer(currentState, action)

    // assert
    expect(newState.foods).toBe(expected)
  })
  it('getFoodsPending', () => {
    // arrange
    const expected = {
      info: {
        pending: true,
        error: 'ERR: derp'
      }
    }

    const currentState = {
      info: {
        pending: false,
        error: 'ERR: derp'
      }
    }
    const action = getFoodsPending()

    // act
    const newState = infoReducer(currentState, action)

    // assert
    expect(newState.info.pending).toBe(expected.info.pending)
    expect(newState.info.error).toBe(expected.info.error)
  })
})
