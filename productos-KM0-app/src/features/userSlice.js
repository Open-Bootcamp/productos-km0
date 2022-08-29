import { createSlice } from '@reduxjs/toolkit';

const initialState = {

    // Estado para loguear
    isLoadingR: true,
    isFirstTimeR: false,
    userTypeRegister: '',
    isNewUser: false,
    isAuth: false,
    // ui state
    spinner: false,
    user: {},
    isLoggedIn: false
}

export const userSlice = createSlice({
    name: 'userSlice',
    initialState: initialState,
    reducers: {
        setFirstTime(state, action){
            state.isFirstTimeR = action.payload
        },
        setLoading(state, action){
            state.isLoadingR = action.payload
        },
        registerNewUser(state, action){
            state.isNewUser = action.payload
        },
        userLoggedIn(state, action){
            state.user = action.payload
            state.isAuth = true
        },
        errorLoggedIn(state, action) {
            state.user = {}
            state.isAuth = false
        },
        actionSpinner(state, action ){
            state.spinner = action.payload
        },
        logOutHandler(state, action){
            //state.isLoadingR = true,
            //state.isFirstTimeR = false,
            //state.userTypeRegister = '',
            //state.isNewUser = false,
            state.isAuth = false
            // ui stat =
            //state.spinner = false,
            //state.user = {},
            //state.isLoggedIn = false
        }
    }
});

export const userAction = userSlice.actions;