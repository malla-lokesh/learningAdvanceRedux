import cartReducer from './CartReducer';
import { configureStore } from "@reduxjs/toolkit";

const centralStore = configureStore({
    reducer: {
        cart: cartReducer
    }
});

export default centralStore;