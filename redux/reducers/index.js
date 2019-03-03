import { combineReducers } from 'redux'
import selectPhotoReducer from "./selectPhotoReducer"
import peopleReducer from "./peopleReducer"

const rootReducer = combineReducers({
  selectPhoto: selectPhotoReducer,
  people: peopleReducer
})

export default rootReducer
