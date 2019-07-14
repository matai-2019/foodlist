import { combineReducers } from 'redux'

import categories from './categories'
import foodDetails from './foodDetails'
import foods from './foods'
import info from './info'
import sort from './sort'

export default combineReducers({
  categories,
  foodDetails,
  foods,
  info,
  sort
})
