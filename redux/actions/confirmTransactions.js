import * as types from "./types"

export const confirmTransactions = (transactionsObj) => {
  return {
    type: types.CONFIRM_TRANSACTIONS,
    payload: transactionsObj
  }
}
