import * as types from "./types"
import * as scanPhoto from "./scanPhoto"

export const selectPhoto = (photoObj) => {
  return dispatch => {
    let photo = {...photoObj}
    delete photo.base64
    dispatch({
      type: types.SELECT_PHOTO,
      payload: photo
    })
    scanPhoto.fetchScanInfo(photoObj.base64)
      .then(photoScan => {
        dispatch(scanPhoto.setLineAmounts(photoScan))
      })
  }
}
