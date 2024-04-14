import { DECREMENT, INCREASE, INCREMENT, TOGGLE } from "./actionTypes";

export const incAction = () => ({ type: INCREMENT });
export const decAction = () => ({ type: DECREMENT });
export const toggleAction = () => ({ type: TOGGLE });
export const increaseAction = (value) => ({ type: INCREASE, payload: value });