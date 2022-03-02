import "./index.css";
import { getCount, increment, reset } from "./counter";
import { useDispatch, useSelector } from "react-redux";

export default function CounterRedux() {
  const count = useSelector(getCount);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h2>Count Redux</h2>
      <div>Display {count}</div>
      <button onClick={() => dispatch(increment(+1))}>+ 1</button>
      <button onClick={() => dispatch(increment(-1))}>- 1</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
    </div>
  );
}
