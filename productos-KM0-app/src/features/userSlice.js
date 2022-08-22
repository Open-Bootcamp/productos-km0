import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user: {},
    isLoggedIn: false
}

export const userSlice = createSlice({
    name: 'userSlice',
    initialState: initialState,
    reducers: {
        loggedin(state, action) {
            state.isLoggedIn = action.payload
        },

        logout(state, action) {

        }
    }
});

export const userAction = userSlice.actions;