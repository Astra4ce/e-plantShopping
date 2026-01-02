import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
        console.log("addItem", action.payload)
        const { name, image, cost } = action.payload;
        const existingItem = state.items.find(item => item.name === name)
        if (existingItem) {
            existingItem.quantity++
        } else {
            state.items.push({ name, image, cost, quantity: 1 });
        }
    },
    removeItem: (state, action) => {
        console.log("removeItem", action.payload)
        const { name } = action.payload;
        state.items = state.items.filter((item) => item.name !== name)
    },
    updateQuantity: (state, action) => {
        console.log("updateQuantity", action.payload)
        const { name, quantity } = action.payload;
        const item = state.items.find(item => item.name === name)
        if (item) {
            item.quantity = quantity
        }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
