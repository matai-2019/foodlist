import {
  GET_FOODS_PENDING,
  GET_FOODS_SUCCESS,
  GET_FOODS_ERROR } from './../actions/foods'
import {
  GET_CATEGORIES_PENDING,
  GET_CATEGORIES_SUCCESS,
  GET_CATEGORIES_ERROR } from '../actions/categories'
import {
  GET_FOOD_DETAILS_PENDING,
  GET_FOOD_DETAILS_SUCCESS,
  GET_FOOD_DETAILS_ERROR } from './../actions/foodDetails'
import {
  GET_CATEGORY_PENDING,
  GET_CATEGORY_SUCCESS,
  GET_CATEGORY_ERROR } from '../actions/category'
import {
  ADD_FOOD_ERROR,
  EDIT_FOOD_ERROR } from './../actions/updateFoodErrors'

export default function infoReducer (state = { pending: true }, action) {
  switch (action.type) {
    case GET_FOODS_PENDING:
    case GET_CATEGORIES_PENDING:
    case GET_FOOD_DETAILS_PENDING:
    case GET_CATEGORY_PENDING:
      return {
        ...state,
        pending: true
      }
    case GET_FOODS_SUCCESS:
    case GET_CATEGORIES_SUCCESS:
    case GET_FOOD_DETAILS_SUCCESS:
    case GET_CATEGORY_SUCCESS:
      return {
        ...state,
        pending: false,
        error: null
      }
    case GET_FOODS_ERROR:
    case GET_CATEGORIES_ERROR:
    case GET_FOOD_DETAILS_ERROR:
    case ADD_FOOD_ERROR:
    case EDIT_FOOD_ERROR:
    case GET_CATEGORY_ERROR:
      return {
        ...state,
        pending: false,
        error: action.message
      }
    default:
      return state
  }
}
