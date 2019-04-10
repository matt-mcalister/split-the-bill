import * as types from "../actions/types"

const defaultState = {
  photo: null,
  lineAmounts: null
}

const selectPhotoReducer = (state = defaultState, action) => {
  switch(action.type){
    case types.SELECT_PHOTO:
      return {
        ...state,
        photo: action.payload
      }
      break;
    case types.SET_LINE_AMOUNTS:
      if (state.photo) {
        let formattedLineAmounts = {}
        action.payload.forEach(la => {
          formattedLineAmounts[la.index] = {...la, peopleIds: []}
        })
        return {
          ...state,
          lineAmounts: formattedLineAmounts
        }
      } else {
        return state
      }
      break;
    case types.CONFIRM_TRANSACTIONS:
      return {
        ...state,
        lineAmounts: {...action.payload}
      }
    case types.FULL_RESET:
      return defaultState
      break;
    default:
      return state
  }
}

export default selectPhotoReducer
