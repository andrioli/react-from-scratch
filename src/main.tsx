import * as React from "react";
import * as ReactDOM from "react-dom";
import * as ReactRedux from "react-redux";
import * as Redux from "redux";
import Hello from "./Hello";

const store = Redux.createStore((state: number = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
});

ReactDOM.render(
  <ReactRedux.Provider store={store}>
    <Hello name="World"/>
  </ReactRedux.Provider>,
  document.getElementById("root"),
);
