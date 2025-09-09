import { configureStore } from "@reduxjs/toolkit";
import cartStoreReducer from './cart-slice';
import uiReducer from './ui-slice';


const store = configureStore({
    reducer: {
       cartStore: cartStoreReducer,
       ui: uiReducer
    }
});

export default store;