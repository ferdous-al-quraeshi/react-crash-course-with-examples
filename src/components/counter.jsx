import React, { Component } from "react";

class Counter extends Component {
  // states of this component
  state = {
    count: 0,
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
        <button onClick={this.handleReset} className="btn btn-light btn-sm">
          Reset
        </button>

        {this.renderTags()}
      </div>
    );
  }

  /* helper methods */
  handleIncrement = e => {
    console.log(e);
    // the arrow function approach that auto inherited (NOT re-bind) the 'this'
    this.setState({ count: this.state.count + 1 });
  };
  handleDecrement = () => {
    // the arrow function approach that auto inherited (NOT re-bind) the 'this'
    this.setState({ count: this.state.count - 1 });
  };
  handleReset = () => {
    // the arrow function approach that auto inherited (NOT re-bind) the 'this'
    this.setState({ count: 0 });
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
      this.state.count === 0
        ? "warning"
        : this.state.count < 0
          ? "danger"
          : this.state.count > 0
            ? "primary"
            : 0;
    return classes;
  }
  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
