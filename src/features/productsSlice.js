import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    myCartShop: [],
    totalCartItems: 0
}

export const productSlice = createSlice({
    name: 'productsSlice',
    initialState: initialState,
    reducers: {
        addProductCart(state, action) {
            state.totalCartItems = state.totalCartItems += 1;
            const existingProductIndex = state.myCartShop.findIndex( (item) => item.id === action.payload.id );
            const existingItem = state.myCartShop[existingProductIndex];
            let updatedProduct;
            if(existingItem) {
                updatedProduct = {...existingItem}
                updatedProduct.subTotal = updatedProduct.subTotal + action.payload.subTotal
                updatedProduct.subTotalItems += 1
                let updatedItems = [...state.myCartShop]
                updatedItems[existingProductIndex] = updatedProduct
                state.myCartShop = updatedItems
            }else {
                const updatedItemFirsTime = {
                    ...action.payload,
                }
                state.myCartShop = [...state.myCartShop, updatedItemFirsTime]
            }
        },
        removeProductCart(state, action) {
            state.totalCartItems = state.totalCartItems -= 1;
            const existingProductIndex = state.myCartShop.findIndex( (item) => item.id === action.payload.id );
            const existingItem = state.myCartShop[existingProductIndex];

            if(existingItem.subTotalItems === 1) {
                state.myCartShop = state.myCartShop.filter( (ele) => ele.id !== action.payload.id)
            }else {
                let updatedProduct;
                updatedProduct = {...existingItem}
                updatedProduct.subTotal = updatedProduct.subTotal - action.payload.subTotal
                updatedProduct.subTotalItems -= 1
                let updatedItems = [...state.myCartShop]
                updatedItems[existingProductIndex] = updatedProduct
                state.myCartShop = updatedItems
            }
            
        }
    }
});

export const productActions = productSlice.actions;