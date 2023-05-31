import { createSlice } from "@reduxjs/toolkit";

const initialCartState = { 
    toggleCart: false,
}

const cartSlice = createSlice({
    name: 'cart',
    initialState: initialCartState,
    reducers: {
        toggle(state) {
            state.toggleCart = !state.toggleCart;
        },
    }
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;