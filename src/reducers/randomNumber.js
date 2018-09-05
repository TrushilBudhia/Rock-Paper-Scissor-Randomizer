export function randomNumber(state = { number: "-" }, action = { type: '' }) {
  switch (action.type) {
    case 'GENERATE_RANDOMNUMBER':
      return {
        ...state,        
        number: action.number
      }

    default:
      return state
  }
}