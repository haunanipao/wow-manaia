// Home of action creators

export function addWow(wow) {
  return {
    type: 'ADD_WOW',
    payload: wow,
  }
}

export function updateWow({ quote, newQuote, name, newName }) {
  return {
    type: 'UPDATE_WOW',
    payload: { quote, newQuote, name, newName },
  }
}

export function deleteWow(wow) {
  return {
    type: 'DEL_WOW',
    payload: wow,
  }
}
