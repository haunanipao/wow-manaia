// Home of action creators
import { addWow as addNewWow, getWows } from '../apiClient'
export const SET_ERROR = 'SET_ERROR'

// all the wows
export function setWows(wows) {
  return {
    type: 'SET_WOW',
    payload: wows,
  }
}

export function addWow(newWow) {
  return (dispatch) => {
    return addNewWow(newWow)
      .then(() => {
        dispatch(fetchWows())
        return null
      })
      .catch((err) => {
        dispatch(setError(err.message))
      })
  }
}

// Complex Functions / fetchWows, returns the dispatch (which returns getWows)
export function fetchWows() {
  return (dispatch) => {
    return getWows()
      .then((wows) => {
        dispatch(setWows(wows))
        // component interacts with actions and actions interacts with (apiClient, Reducer)
      })
      .catch((err) => {
        dispatch(setError(err.message))
      })
  }
}

export function setError(errMessage) {
  return {
    type: SET_ERROR,
    errMessage,
  }
}

// REDUX THUNK
// export function updateWow({ quote, newQuote, name, newName }) {
//   return {
//     type: 'UPDATE_WOW',
//     payload: { quote, newQuote, name, newName },
//   }
// }

// export function deleteWow(wow) {
//   return {
//     type: 'DEL_WOW',
//     payload: wow,
//   }
// }
// REDUX THUNK
