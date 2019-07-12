import {
  GET_FOOD_DETAILS_PENDING,
  GET_FOOD_DETAILS_SUCCESS,
  GET_FOOD_DETAILS_ERROR } from '../../../client/actions/foodDetails'
import {
  GET_CATEGORIES_PENDING,
  GET_CATEGORIES_SUCCESS,
  GET_CATEGORIES_ERROR } from '../../../client/actions/categories'
import infoReducer from '../../../client/reducers/info'

it('returns default state without case matches', () => {
  const intialState = { pending: true }
  const action = { type: 'GET_NO_CASE_MATCH', action: { name: 'noCaseMatch' } }
  const actual = infoReducer(intialState, action)
  expect(actual).toBe(intialState)
})

describe('infoReducer with getFoods actions', () => {
  it('returns pending | pending: true', () => {
    const intialState = { pending: true }
    const action = { type: GET_FOOD_DETAILS_PENDING, action: {} }
    const actual = infoReducer(intialState, action)
    expect(actual).toStrictEqual(intialState)
  })

  it('returns success | pending: false, error: null', () => {
    const intialState = { pending: false, error: null }
    const action = { type: GET_FOOD_DETAILS_SUCCESS, action: {} }
    const actual = infoReducer(intialState, action)
    expect(actual).toStrictEqual(intialState)
  })

  it('returns error | pending: false, error: message', () => {
    const intialState = { pending: false, error: 'ERROR' }
    const action = { type: GET_FOOD_DETAILS_ERROR, message: 'ERROR' }
    const actual = infoReducer(intialState, action)
    expect(actual).toStrictEqual(intialState)
  })
})

describe('infoReducer with getCategories actions', () => {
  it('returns pending | pending: true', () => {
    const intialState = { pending: true }
    const action = { type: GET_CATEGORIES_PENDING, action: {} }
    const actual = infoReducer(intialState, action)
    expect(actual).toStrictEqual(intialState)
  })

  it('returns success | pending: false, error: null', () => {
    const intialState = { pending: false, error: null }
    const action = { type: GET_CATEGORIES_SUCCESS, action: {} }
    const actual = infoReducer(intialState, action)
    expect(actual).toStrictEqual(intialState)
  })

  it('returns error | pending: false, error: message', () => {
    const intialState = { pending: false, error: 'ERROR' }
    const action = { type: GET_CATEGORIES_ERROR, message: 'ERROR' }
    const actual = infoReducer(intialState, action)
    expect(actual).toStrictEqual(intialState)
  })
})
