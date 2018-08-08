import React, { Component } from "react";

class Counter extends Component {
  // states of this component
  state = {
    count: 0
  };

  render() {
    return (
      <React.Fragment>
        <span> {this.formatCount()}</span>
        <button>Increment</button>
      </React.Fragment>
    );
  }

  // helper methods
  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
