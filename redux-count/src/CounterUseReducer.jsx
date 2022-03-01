import "./index.css";
import { useReducer } from "react";
import { counter, increment, reset } from "./counter";

export default function CounterUseReducer() {
  const [count, dispatch] = useReducer(counter, 0);

  return (
    <div className="App">
      <h2>Count useReducer</h2>
      <div>Display {count}</div>
      <button onClick={() => dispatch(increment(+1))}>+ 1</button>
      <button onClick={() => dispatch(increment(-1))}>- 1</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
    </div>
  );
}
