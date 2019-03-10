import { API_KEY } from "../../constants/apiKey"
import * as types from "./types"
import { data } from "../../constants/testData"

export const setLineAmounts = (fetchedData) => {
  console.log(fetchedData);
  let lineAmounts = fetchedData.lineAmounts.length > 0 ? fetchedData.lineAmounts : fetchedData.amounts

  lineAmounts = lineAmounts.map(transaction => {
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

export const fetchScanInfo = (image) => {
  console.log(API_KEY);
  return fetch("https://api.taggun.io/api/receipt/v1/verbose/encoded", {
    method: "POST",
    headers: {
      "apikey": API_KEY,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ contentType: "image/jpeg", filename: "receipt.jpg", image })
  }).then(res => res.json())
}
