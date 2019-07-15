export const ADD_FOOD_ERROR = 'ADD_FOOD_ERROR'
export const EDIT_FOOD_ERROR = 'EDIT_FOOD_ERROR'

export function addFoodError (message) {
  return {
    type: ADD_FOOD_ERROR,
    message
  }
}

export function editFoodError (message) {
  return {
    type: EDIT_FOOD_ERROR,
    message
  }
}
