import "./index.css";
import { counter } from "./counter";
import { Provider } from "react-redux";
import CounterUseReducer from "./CounterUseReducer";
import CounterRedux from "./CounterRedux";

import { combineReducers, createStore } from "redux";
const reducer = combineReducers({ counter });
const store = createStore(reducer);

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
