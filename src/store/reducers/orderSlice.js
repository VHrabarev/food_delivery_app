import { createSlice } from '@reduxjs/toolkit';

const initialState  = {
    userInfo: {
        name: "",
        email: "",
        phone: "",
        address: "",
    },
    productsInfo: {},
    successAddToCart: false,
    successMakeToOrder: false,
};

const orderSlice = createSlice({
    name: "order",
    initialState,
    reducers: {
        addToCart: (store, action) => {
            if(store.productsInfo[action.payload.productId]) {
                store.productsInfo[action.payload.productId].amount++;
            } else {
                store.productsInfo = {...store.productsInfo, [action.payload.productId]: {...action.payload, amount: 1}};
            }
        },
        successAddToCart: (store, action) => {
            store.successAddToCart = action.payload;
        },
        successMakeToOrder: (store, action) => {
            store.successMakeToOrder = action.payload;
        },
        clearCart: (store) => {
            store.productsInfo = {};
        },
    }
});

export const {addToCart, successAddToCart, successMakeToOrder, clearCart} = orderSlice.actions;
export default orderSlice.reducer;