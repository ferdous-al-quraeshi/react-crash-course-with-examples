import React, { Component } from "react";

class Counter extends Component {
  // states of this component
  state = {
    count: 0,
    imageURL: "https://picsum.photos/78"
  };

  render() {
    return (
      <React.Fragment>
        <img src={this.state.imageURL} alt="" />
        <span className="badge badge-primary m-2"> {this.formatCount()}</span>
        <button className="btn btn-secondary btn-sm">Increment</button>
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
