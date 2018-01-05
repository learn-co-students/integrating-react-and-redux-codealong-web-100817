import React from "react";

export default props => {
  const handleClick = () => {
    props.store.dispatch({ type: "INCREASE_COUNT" });
  };

  return (
    <div>
      <button onClick={this.handleClick}>Click Me</button>
      <div>{props.store.getState().count}</div>
    </div>
  );
};
