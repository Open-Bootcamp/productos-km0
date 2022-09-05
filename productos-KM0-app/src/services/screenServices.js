import { createAsyncThunk } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { unboardingActions } from '../features/unboardingSlice';

export const turotialUnboarding = createAsyncThunk(
    'unboarding_user',
    async (_, thunkApi) => {
        try {
            const userUnboarding = await AsyncStorage.getItem('$unboardingProductor');
            if(!userUnboarding) {
                thunkApi.dispatch(unboardingActions.firstTimeUnboarding(true))
            }
        } catch (error) {
            console.log(error, 'Unable to get item form async storage')
        }finally {
            thunkApi.dispatch(unboardingActions.loadingUnboarding(false))
        }
    }
)

export const setFirstTimeTutorial = createAsyncThunk(
    'set_first_time_unboarding',
    async (_, thunkApi) => {
        try {
            await AsyncStorage.setItem('$unboardingProductor', 'true')
            thunkApi.dispatch(unboardingActions.firstTimeUnboarding(false))
        } catch (error) {
            console.log(error, 'Unable to save item')
        }
    }
)