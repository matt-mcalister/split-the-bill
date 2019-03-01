import * as types from "../actions/types"

const defaultState = {
  photo: null,
}

const selectPhotoReducer = (state = defaultState, action) => {
  switch(action.type){
    case types.SELECT_PHOTO:
      return {
        ...state,
        photo: action.payload
      }
      break;
    default:
      return state
  }
}

export default selectPhotoReducer
