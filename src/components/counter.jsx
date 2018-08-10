import React, { Component } from "react";

class Counter extends Component {
  // Now it's made a controlled (stateless) component to implement 'Single Source of Truth' pattern

  /* a classic approach for 'binding' event handlers */
  // constructor() {
  //   super(); // Syntax error: 'this' is not allowed before super()
  //   this.handleIncrement = this.handleIncrement.bind(this);
  // }

  render() {
    return (
      <div className="jumbotron">
        <h4>Counter# {this.props.counter.id}</h4>
        <button
          onClick={() => this.props.onDecrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          -
        </button>
        <span className={this.getBadgeClasses()}> {this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          +
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm ml-2"
        >
          Delete
        </button>
      </div>
    );
  }

  /* helper methods */
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes +=
      this.props.counter.value === 0
        ? "warning"
        : this.props.counter.value < 0
          ? "danger"
          : this.props.counter.value > 0
            ? "primary"
            : 0;
    return classes;
  }
  formatCount() {
    // object destructuring to read the value property of the 'state'
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
