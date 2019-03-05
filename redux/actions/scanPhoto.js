import * as types from "./types"
import { data } from "../../constants/testData"
export const setLineAmounts = (fetchedData) => {
  return {
    type: types.SET_LINE_AMOUNTS,
    payload: data.scannedInfo.lineAmounts
  }
}
