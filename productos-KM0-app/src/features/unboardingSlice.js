import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isLoadingUn: true,
    isFirstimeUm: false,
}

export const unboardingSlice = createSlice({
    name: 'unboarding_screens',
    initialState: initialState,
    reducers: {
        firstTimeUnboarding(state, action) {
            state.isFirstimeUm = action.payload
        },
        loadingUnboarding(state, action) {
            state.isLoadingUn = action.payload
        }
    }
})

export const unboardingActions = unboardingSlice.actions;