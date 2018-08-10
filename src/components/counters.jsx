import React, { Component } from "react";
import Counter from "./counter";

let style = {
  resetBtn: {
    position: "fixed",
    top: "10px",
    left: "50%"
  }
};

class Counters extends Component {
  render() {
    const {
      onReset,
      counters,
      onDecrement,
      onIncrement,
      onDelete
    } = this.props;

    return (
      <div>
        <button
          style={style.resetBtn}
          onClick={onReset}
          className="btn btn-secondary ml-3"
        >
          Reset
        </button>
        {counters.map(counter => (
          <Counter
            key={counter.id}
            onDecrement={onDecrement}
            onIncrement={onIncrement}
            onDelete={onDelete}
            counter={counter} // this 'counter' object encapsulates all the props / data within it and save us from redundant explicit prop declaration
          />
        ))}
      </div>
    );
  }
}

export default Counters;
