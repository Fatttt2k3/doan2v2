import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './slides/couterSlice'

export default configureStore({
  reducer: {
    counter: counterReducer
  }
})