import { useDispatch, useSelector } from "react-redux";
import classes from "./Counter.module.css";
import {
  decAction,
  incAction,
  increaseAction,
  toggleAction,
} from "../store/actions";

const Counter = () => {
  const { value, open } = useSelector((state) => state.count);
  const dispatch = useDispatch();

  const toggleCounterHandler = () => dispatch(toggleAction());
  const handleInc = () => dispatch(incAction());
  const handleIncreaseBy = () => dispatch(increaseAction(5));
  const handleDec = () => dispatch(decAction());
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {open && <div className={classes.value}>{value}</div>}
      <div>
        <button onClick={handleInc}>Increment</button>
        <button onClick={handleIncreaseBy}>Increment by 5</button>
        <button onClick={handleDec}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
