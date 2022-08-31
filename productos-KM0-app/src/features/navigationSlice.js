import { createSlice } from '@reduxjs/toolkit';

const initialState = {

    initialRoute: '',
}

export const navigationSlice = createSlice({
    name: 'navigation_slice',
    initialState: initialState,
    reducers: {
        changePageHeader(state, action) {
            state.initialRoute = action.payload
        }
    }
});

export const navigationActions = navigationSlice.actions;