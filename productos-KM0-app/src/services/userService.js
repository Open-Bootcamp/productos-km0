import { createAsyncThunk } from '@reduxjs/toolkit';
import { userAction } from '../features/userSlice';

// ARCHIVO PARA CREAR PETICIONES HTTP A DIFERENTES ENDPOINTS USANDO FETCH O AXIOS
export default loginUser = createAsyncThunk(
    'login_use',
    async (_, thunkApi) => {
        try {
            
        } catch (error) {
            console.log(error)
        }
    }
)