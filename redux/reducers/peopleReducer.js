import * as types from "../actions/types"

const defaultState = {}

const peopleReducer = (state = defaultState, action) => {
  switch(action.type){
    case types.CONFIRM_PEOPLE:
      return {
        ...action.payload
      }
      break;
    case types.FULL_RESET:
      return defaultState
      break;
    default:
      return state
  }
}

export default peopleReducer
