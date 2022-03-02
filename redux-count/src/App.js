import "./index.css";
import { counter } from "./counter";
import { Provider } from "react-redux";
import CounterUseReducer from "./CounterUseReducer";
import CounterRedux from "./CounterRedux";

import { createStore } from "redux";
const store = createStore(counter, 0);

export default function App() {
  return (
    <Provider store={store}>
      <>
        <CounterUseReducer />
        <CounterRedux />
        <CounterRedux />
      </>
    </Provider>
  );
}
