import * as types from "./types"
import { data } from "../../constants/testData"
export const setLineAmounts = (fetchedData) => {
  const lineAmounts = data.scannedInfo.lineAmounts.map(transaction => {
    return {
      ...transaction,
      peopleIds: null
    }
  })
  return {
    type: types.SET_LINE_AMOUNTS,
    payload: lineAmounts
  }
}
