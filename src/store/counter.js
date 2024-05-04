import { createSlice } from "@reduxjs/toolkit";

const initialCounterState = { count: { value: 6, open: true } };

const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    increament(state) {
      state.count.value++;
    },
    increase(state, action) {
      state.count.value += action.payload;
    },
    decrement(state) {
      state.count.value--;
    },

    toggleCounter(state) {
      state.count.open = !state.count.open;
    },
  },
});

export const counterActions = counterSlice.actions;

export default counterSlice.reducer;
