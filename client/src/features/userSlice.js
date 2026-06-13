import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
    name: 'user',
    initialState: {
        isLoggedin: false,
        authUser: null,
    },
    reducers: {
        setAuthState: (state, action) => {
            state.isLoggedin = action.payload.isLoggedin
            state.authUser = action.payload.authUser
        }
    }
})

export const { setAuthState } = userSlice.actions
export default userSlice.reducer