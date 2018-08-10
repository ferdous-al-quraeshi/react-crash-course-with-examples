import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    console.log("Counters - Rendered");
    // 'Object destructuring' applied
    const { counters, onDecrement, onIncrement, onDelete } = this.props;
    return (
      <div>
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
