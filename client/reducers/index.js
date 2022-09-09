import { combineReducers } from 'redux'
import wowReducer from './wow'

const reducer = combineReducers({
  wow: wowReducer,
})

export default reducer
