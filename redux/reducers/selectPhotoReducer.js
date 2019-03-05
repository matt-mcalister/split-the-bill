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
      return {
        ...state,
        lineAmounts: action.payload
      }
      break;
    default:
      return state
  }
}

export default selectPhotoReducer
