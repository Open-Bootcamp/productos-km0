import { configureStore } from '@reduxjs/toolkit';
import { userSlice } from '../features/userSlice';
import { productSlice } from '../features/productsSlice';
import { navigationSlice } from '../features/navigationSlice';

// CONFIGURACION DE REDUCER STOTE
export const store = configureStore({
    reducer: {
        user: userSlice.reducer,
        products: productSlice.reducer,
        navigationslice: navigationSlice.reducer,
        // ACA SE PUEDE AGREGAR MAS SLICES
        // EXAMPLE
        // productos: productSlice.reducer
    }
})