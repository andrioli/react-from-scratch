import * as React from "react";
import * as ReactDOM from "react-dom";
import * as ReactRedux from "react-redux";
import * as Redux from "redux";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import * as ReduxThunk from "redux-thunk";
import Counter, { CounterAction, DECREMENT, INCREMENT } from "./Counter";

const store = Redux.createStore((state: number = 0, action: CounterAction) => {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
}, composeWithDevTools(Redux.applyMiddleware(ReduxThunk.default)));

ReactDOM.render(
  <ReactRedux.Provider store={store}>
    <Counter name="World"/>
  </ReactRedux.Provider>,
  document.getElementById("root"),
);
