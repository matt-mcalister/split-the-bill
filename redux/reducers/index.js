import { combineReducers } from 'redux'
import selectPhotoReducer from "./selectPhotoReducer"

const rootReducer = combineReducers({
  selectPhoto: selectPhotoReducer,
})

export default rootReducer
