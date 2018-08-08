import React, { Component } from "react";

class Counter extends Component {
  // states of this component
  state = {
    count: 0,
    tags: [
      // {
      //   id: 1,
      //   el: "tag1"
      // },
      // {
      //   id: 2,
      //   el: "tag1"
      // },
      // {
      //   id: 3,
      //   el: "tag1"
      // },
      // {
      //   id: 4,
      //   el: "tag1"
      // }
    ]
  };

  render() {
    return (
      <React.Fragment>
        <span className={this.getBadgeClasses()}> {this.formatCount()}</span>
        <button className="btn btn-secondary btn-sm">Increment</button>
        {this.renderTags()}
        {/* following is a conditional expression within 'jsx'5 */}
        {this.state.tags.length === 0 && (
          <p className="text-warning">Put some tags here...</p>
        )}
      </React.Fragment>
    );
  }

  // helper methods
  renderTags() {
    if (this.state.tags.length === 0)
      return (
        <p>
          No tags found!
          <span className="ml-2 text-warning">Put some tags here...</span>
        </p>
      );
    return <ul>{this.state.tags.map(t => <li key={t.id}>{t.el}</li>)}</ul>;
  }
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
