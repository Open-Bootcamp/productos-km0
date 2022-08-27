import { createAsyncThunk } from '@reduxjs/toolkit';
import { userAction } from '../features/userSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';

// ARCHIVO PARA CREAR PETICIONES HTTP A DIFERENTES ENDPOINTS USANDO FETCH O AXIOS
export const loginUser = createAsyncThunk(
    'login_user',
    async (data, thunkApi) => {
        try {
            setTimeout(() => {
                // Validar que la respuesta sea 200 para darle accesos
                thunkApi.dispatch(userAction.userLoggedIn({
                    name: 'James',
                    lastName: 'Tuyuc',
                    typeUser: 'comprador'
                }))
                thunkApi.dispatch(userAction.actionSpinner(false));
            }, 2000)
        } catch (error) {
            console.log(error)
            thunkApi.dispatch(userAction.userLoggedIn({}))
        }finally {
            thunkApi.dispatch(userAction.actionSpinner(false));
        }
    }
)

export const checkUnboardingR = createAsyncThunk(
    'check_unboarding',
    async (_, thunkApi) => {
        try {
            const result = await AsyncStorage.getItem('$firstTimne')
            if(!result) {
                //setIsFirstTime(true)
                thunkApi.dispatch(userAction.setFirstTime(true));
            }

        } catch (error) {
            console.log(error, 'unable to get item from Async')
        }finally {
            thunkApi.dispatch(userAction.setLoading(false));
        }
        
    }
);

export const setFirstTimeLoginR = createAsyncThunk(
    'set_first_time_login',
    async (_, thunkApi) => {
        try {
            await AsyncStorage.setItem('$firstTimne', 'true')
            thunkApi.dispatch(userAction.setFirstTime(false));
            //setIsFirstTime(false)
        } catch (error) {
            console.log(error, 'unable to set item')
        }
    }
)
