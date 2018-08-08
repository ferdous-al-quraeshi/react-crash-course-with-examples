import React, { Component } from "react";

class Counter extends Component {
  // states of this component
  state = {
    count: 0
  };

  render() {
    return (
      <React.Fragment>
        <span className={this.getClasses()}> {this.formatCount()}</span>
        <button className="btn btn-secondary btn-sm">Increment</button>
      </React.Fragment>
    );
  }

  // helper methods
  getClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }
  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
