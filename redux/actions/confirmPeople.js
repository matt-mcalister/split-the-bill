import * as types from "./types"

export const confirmPeople = (peopleObj) => {
  return {
    type: types.CONFIRM_PEOPLE,
    payload: peopleObj
  }
}
