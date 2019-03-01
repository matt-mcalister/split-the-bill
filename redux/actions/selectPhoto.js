import * as types from "./types"

export const selectPhoto = (photoObj) => {
  return {
    type: types.SELECT_PHOTO,
    payload: photoObj
  }
}
