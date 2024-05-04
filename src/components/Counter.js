import { useDispatch, useSelector } from "react-redux";
import classes from "./Counter.module.css";
import { counterActions } from "../store/counter";

const Counter = () => {
  const { value, open } = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  const toggleCounterHandler = () => dispatch(counterActions.toggleCounter());
  const handleInc = () => dispatch(counterActions.increament());
  const handleIncreaseBy = () => dispatch(counterActions.increase(5));
  const handleDec = () => dispatch(counterActions.decrement());
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
