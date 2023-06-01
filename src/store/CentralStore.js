import cartReducer from './CartReducer';
import { configureStore } from "@reduxjs/toolkit";
import uiReducer from './UI-Slice';

const centralStore = configureStore({
    reducer: {
        cart: cartReducer,
        ui: uiReducer
    }
});

export default centralStore;