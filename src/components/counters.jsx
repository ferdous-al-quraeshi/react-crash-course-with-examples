import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    name: "Counters",
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };

  /* Children's event handlers */
  handleDelete = counterId => {
    // return all the counter objects except the one with the given id (the del btn of which is clicked)
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters }); // polluting the state of the counters
  };

  render() {
    return (
      <div>
        {this.state.counters.map(counter => (
          <Counter
            key={counter.id}
            onDelete={this.handleDelete}
            counter={counter} // this 'counter' object encapsulates all the props / data within it and save us from redundant explicit prop declaration
          />
        ))}
      </div>
    );
  }
}

export default Counters;
