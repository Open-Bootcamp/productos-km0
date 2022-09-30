import { configureStore } from '@reduxjs/toolkit';
import { userSlice } from '../features/userSlice';
import { productSlice } from '../features/productsSlice';

// CONFIGURACION DE REDUCER STOTE
export const store = configureStore({
    reducer: {
        user: userSlice.reducer,
        products: productSlice.reducer
        // ACA SE PUEDE AGREGAR MAS SLICES
        // EXAMPLE
        // productos: productSlice.reducer
    }
})