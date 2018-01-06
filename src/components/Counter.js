import React from "react";

export default props => {
  console.log("props", props.store.getState());
  return (
    <div>
      <div>{props.store.getState().count}</div>
      <button
        onClick={() => {
          props.store.dispatch({ type: "INCREASE_COUNT" });
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          props.store.dispatch({ type: "DECREASE_COUNT" });
        }}
      >
        -
      </button>
    </div>
  );
};
