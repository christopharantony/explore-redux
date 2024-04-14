import { createStore } from "redux";
import { DECREMENT, INCREASE, INCREMENT, TOGGLE } from "./actionTypes";

const reducer = (state, action) => {
  if (action.type === INCREMENT) {
    const newCount = ++state.count.value;
    return { count: { ...state.count, value: newCount } };
  } else if (action.type === INCREASE) {
    const newCount = state.count.value + action.payload;
    return { count: { ...state.count, value: newCount } };
  } else if (action.type === DECREMENT) {
    const newCount = --state.count.value;
    return { count: { ...state.count, value: newCount } };
  } else if (action.type === TOGGLE) {
    return { count: { ...state.count, open: !state.count.open } };
  }
  return state;
};

const store = createStore(reducer, { count: { value: 6, open: true } });

export default store;
