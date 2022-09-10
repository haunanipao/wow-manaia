// Home of action creators
import { addWow as addWowApi, getWow } from '../apiClient'

// add a wow
export function addWow(wow) {
  return {
    type: 'ADD_WOW',
    payload: wow,
  }
}

// all the wows
export function setWows(wows) {
  return {
    type: 'SET_WOW',
    payload: wows,
  }
}

// Complex Functions / fetchWow, returns the dispatch (which returns getWow)
export function fetchWow() {
  // come from form component
  return (dispatch) => {
    return getWow().then((wows) => {
      dispatch(setWows(wows))
      // component interacts with actions and actions interacts with everything else (api, reducer)
    })
  }
}

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
