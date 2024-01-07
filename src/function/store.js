import { configureStore } from "@reduxjs/toolkit";
import counterSlice from './conuter/conuter'
import cartReducer from './conuter/conuter'

export const store = configureStore({
    reducer: {
        counter: counterSlice,
        cart: cartReducer
    }
})