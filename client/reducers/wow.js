const initialWowState = []

const wowReducer = (state = initialWowState, action) => {
  const { type, payload } = action
  switch (type) {
    case 'ADD_WOW':
      return [...state, payload]
    case 'SET_WOW':
      return payload
    case 'DEL_WOW':
      return state.filter((wow) => wow !== payload)
    case 'UPDATE_WOW':
      return state.map((wow) => {
        return wow === payload.name ? payload.newName : wow
        // Q: how do I update more than 1 field?  I need to break this down more.
      })

    default:
      return state
  }
}

export default wowReducer
