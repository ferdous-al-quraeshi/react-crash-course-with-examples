import React, { Component } from "react";

class Counter extends Component {
  // states of this component
  state = {
    value: this.props.value,
    tags: [
      {
        id: 1,
        el: "tag1"
      },
      {
        id: 2,
        el: "tag1"
      },
      {
        id: 3,
        el: "tag1"
      },
      {
        id: 4,
        el: "tag1"
      }
    ]
  };

  /* a classic approach for 'binding' event handlers */
  // constructor() {
  //   super(); // Syntax error: 'this' is not allowed before super()
  //   this.handleIncrement = this.handleIncrement.bind(this);
  // }

  render() {
    return (
      <div className="jumbotron">
        <h4>Counter# {this.props.id}</h4>
        <button
          onClick={() => this.handleIncrement({ id: 1 })}
          className="btn btn-secondary btn-sm"
        >
          +
        </button>
        <span className={this.getBadgeClasses()}> {this.formatCount()}</span>
        <button
          onClick={this.handleDecrement}
          className="btn btn-secondary btn-sm"
        >
          -
        </button>
        <button
          onClick={this.handleReset}
          className="btn btn-light btn-sm ml-2"
        >
          Reset
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.id)}
          className="btn btn-danger btn-sm ml-2"
        >
          Delete
        </button>
      </div>
    );
  }

  /* helper methods */
  handleIncrement = () => {
    // the arrow function approach that auto inherited (NOT re-bind) the 'this'
    this.setState({ value: this.state.value + 1 });
  };
  handleDecrement = () => {
    // the arrow function approach that auto inherited (NOT re-bind) the 'this'
    this.setState({ value: this.state.value - 1 });
  };
  handleReset = () => {
    // the arrow function approach that auto inherited (NOT re-bind) the 'this'
    this.setState({ value: 0 });
  };
  renderTags() {
    if (this.state.tags.length === 0)
      return (
        <p>
          No tags found!
          <span className="ml-2 text-warning">Put some tags here...</span>
        </p>
      );
    return (
      <ul>
        {this.state.tags.map(t => (
          <li key={t.id}>{t.el}</li>
        ))}
      </ul>
    );
  }
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes +=
      this.state.value === 0
        ? "warning"
        : this.state.value < 0
          ? "danger"
          : this.state.value > 0
            ? "primary"
            : 0;
    return classes;
  }
  formatCount() {
    const { value } = this.state;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
