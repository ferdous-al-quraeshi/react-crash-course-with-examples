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

  render() {
    return (
      <React.Fragment>
        <span className={this.getBadgeClasses()}> {this.formatCount()}</span>
        <button className="btn btn-secondary btn-sm">Increment</button>
        <ul>{this.state.tags.map(t => <li key={t.id}>{t.el}</li>)}</ul>
      </React.Fragment>
    );
  }

  // helper methods
  getBadgeClasses() {
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
