import { combineReducers } from 'redux'
import wowReducer from './wow'

const reducer = combineReducers({
  wowState: wowReducer,
})

export default reducer
