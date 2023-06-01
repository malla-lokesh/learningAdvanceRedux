import { createSlice } from "@reduxjs/toolkit";

const initialCartState = { 
    toggleCart: false,
    items: [],
    totalQuantity: 0
}

const cartSlice = createSlice({
    name: 'cart',
    initialState: initialCartState,
    reducers: {
        toggle(state) {
            state.toggleCart = !state.toggleCart;
        },
        addItemToCart(state, action) {
            const newProduct = action.payload;
            const existingItem = state.items.find((product) => product.title === newProduct.title);
            if (existingItem) {
                existingItem.quantity++;
                existingItem.total = existingItem.quantity * existingItem.price;
            } else {
                state.items.push({
                    id: newProduct.id,
                    price: newProduct.price,
                    quantity: 1,
                    total: newProduct.price,
                    title: newProduct.title
                });
            }
            state.totalQuantity++;
        },
        removeItem(state, action) {
            const itemToBeRemoved = action.payload;
            const existingItemIndex = state.items.findIndex((product) => product.title === itemToBeRemoved.title);
            if (state.items[existingItemIndex].quantity > 1) {
                state.items[existingItemIndex].quantity--;
                state.items[existingItemIndex].total = state.items[existingItemIndex].quantity * itemToBeRemoved.price;
            } else {
                state.items.splice(existingItemIndex, 1);
            }
            state.totalQuantity--;
        }
    }
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;