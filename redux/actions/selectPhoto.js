import * as types from "./types"
import * as scanPhoto from "./scanPhoto"

export const selectPhoto = (photoObj) => {
  return dispatch => {
    dispatch({
      type: types.SELECT_PHOTO,
      payload: photoObj
    })
    scanPhoto.fetchScanInfo(photoObj.base64)
      .then(photoScan => {
        dispatch(scanPhoto.setLineAmounts(photoScan))
      })
  }
}
