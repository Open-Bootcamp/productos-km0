import { configureStore } from '@reduxjs/toolkit';
import { userSlice } from '../features/userSlice';

// CONFIGURACION DE REDUCER STOTE
export const store = configureStore({
    reducer: {
        user: userSlice.reducer,

        // ACA SE PUEDE AGREGAR MAS SLICES
        // EXAMPLE
        // productos: productSlice.reducer
    }
})