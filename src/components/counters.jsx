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
    return (
      <div>
        <button
          style={style.resetBtn}
          onClick={this.props.onReset}
          className="btn btn-secondary ml-3"
        >
          Reset
        </button>
        {this.props.counters.map(counter => (
          <Counter
            key={counter.id}
            onDecrement={this.props.onDecrement}
            onIncrement={this.props.onIncrement}
            onDelete={this.props.onDelete}
            counter={counter} // this 'counter' object encapsulates all the props / data within it and save us from redundant explicit prop declaration
          />
        ))}
      </div>
    );
  }
}

export default Counters;
