import { createSlice } from '@reduxjs/toolkit'

interface AppState {
  isDark: boolean
  auth: boolean
}

const initialState: AppState = {
  isDark: false,
  auth: false,
}

export const appSlice = createSlice({
  name: 'app',
  initialState: initialState,
  reducers: {
    toggleIsDark: (state) => {
      state.isDark = !state.isDark
    },
    authLogin: (state) => {
      state.auth = true
    },
    authLogout: (state) => {
      state.auth = false
    },
  },
})

export const { authLogin, authLogout, toggleIsDark } = appSlice.actions

export default appSlice.reducer
