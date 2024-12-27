import { configureStore } from '@reduxjs/toolkit'
import counterSlice from '../src/features/counter/counterSlice'

export default configureStore({
  reducer: {
    counter: counterSlice
  },
})