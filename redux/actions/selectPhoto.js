import * as types from "./types"
import * as scanPhoto from "./scanPhoto"
import { fullReset } from "./fullReset"

export const selectPhoto = (photoObj) => {
  return dispatch => {
    let photo = {...photoObj}
    delete photo.base64
    dispatch({
      type: types.SELECT_PHOTO,
      payload: photo
    })
    console.log("scanning photo");
    scanPhoto.fetchScanInfo(photoObj.base64)
      .then(photoScan => {
        if (photoScan.confidenceLevel > 0.5) {
          dispatch(scanPhoto.setLineAmounts(photoScan))
        } else {
          console.log("SCAN FAILED: ", photoScan);
          dispatch(fullReset())
        }
      })
  }
}
