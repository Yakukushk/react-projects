import { createSlice } from "@reduxjs/toolkit";

export const uiSlice = createSlice({
  name: "ui",
  initialState: {
    cartVisible: false,
    notification: null,
  },
  reducers: {
    toggle: (state) => {
      state.cartVisible = !state.cartVisible;
    },
    sendNotification: (state, actions) => {
        state.notification = {
            status: actions.payload.status,
            message: actions.payload.message
        }
    }
  },
});

export const { toggle, sendNotification } = uiSlice.actions;

export default uiSlice.reducer;
