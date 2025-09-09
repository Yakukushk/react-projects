import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cartStore",
  initialState: {
    items: [],
    itemQuantity: 0,
    // changed: false
  },
  reducers: {
    mapperCart: (state, actions) => {
      state.itemQuantity = actions.payload.itemQuantity;
      state.items = actions.payload.items;
    },
    onAddCart: (state, actions) => {
      const newItem = actions.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      state.itemQuantity++;
    //   state.changed = true;

      if (!existingItem) {
        state.items.push({
          ...newItem,
          quantity: 1,
          totalPrice: newItem.price,
        });
      } else {
        existingItem.quantity += 1;
        existingItem.totalPrice += newItem.price;
      }
    },
    onRemoveCart: (state, actions) => {
      const newItem = actions.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      const index = state.items.findIndex((item) => item.id === newItem.id);
      state.itemQuantity--;
    //   state.changed = true;

      if (existingItem) {
        if (existingItem.quantity === 1) {
          state.items.splice(index, 1);
        } else {
          existingItem.quantity--;
          existingItem.totalPrice -= newItem.price;
        }
      }
    },
  },
});



export const { onAddCart, onRemoveCart, mapperCart } = cartSlice.actions;
export default cartSlice.reducer;
