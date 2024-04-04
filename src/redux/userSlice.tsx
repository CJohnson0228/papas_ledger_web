import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface UserState {
  name: string | null
  token: string | null
  _id: string | null
}

const initialState: UserState = {
  name: null,
  token: null,
  _id: null,
}

export const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    userLogout: (state) => {
      state.name = null
      state.token = null
      state._id = null
    },
    userLogin: (state, action: PayloadAction<UserState>) => {
      const { name, token, _id } = action.payload
      if (name !== undefined) {
        state.name = name
      } else {
        state.name = null
      }

      if (token !== undefined) {
        state.token = token
      } else {
        state.token = null
      }

      if (_id !== undefined) {
        state._id = _id
      } else {
        state._id = null
      }
    },
  },
})

export const { userLogin, userLogout } = userSlice.actions

export default userSlice.reducer
