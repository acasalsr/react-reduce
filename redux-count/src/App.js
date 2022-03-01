import "./index.css";
import CounterUseReducer from "./CounterUseReducer";
import {counter, increment, reset} from "./counter";

import { createStore } from "redux";
const store = createStore(counter, 0);

export default function App() {
  return (
    <>
      <CounterUseReducer />
    </>
  );
}
