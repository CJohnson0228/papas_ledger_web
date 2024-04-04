import { configureStore } from '@reduxjs/toolkit'
import appReducer from './appSlice'
import userReducer from './userSlice'

const store = configureStore({
  reducer: {
    user: userReducer,
    app: appReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export default store
