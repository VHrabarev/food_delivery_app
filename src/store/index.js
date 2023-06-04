import { configureStore } from '@reduxjs/toolkit';
import orderSlice from './reducers/orderSlice';
import shopsSlice from './reducers/shopsSlice';

const store = configureStore({
    reducer: {
        order: orderSlice,
        shops: shopsSlice,
    },
});

console.log(store.getState());
store.subscribe(() => console.log(store.getState()));

export default store;