import { combineReducers } from 'redux'

import foods from './foods'
import info from './info'
import categories from './categories'

export default combineReducers({
  foods,
  info,
  categories
})
