import React, { Component } from "react";
import Counter from "./counter";

let style = {
  resetBtn: {
    position: "fixed",
    top: "80px",
    left: "50%"
  }
};

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
  handleDecrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index].value--;
    this.setState({ counters });
  };
  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index].value++;
    this.setState({ counters });
  };
  handleDelete = counterId => {
    // return all the counter objects except the one with the given id (the del btn of which is clicked)
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters }); // polluting the state of the counters
  };
  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  render() {
    return (
      <div>
        <button
          style={style.resetBtn}
          onClick={this.handleReset}
          className="btn btn-secondary ml-3"
        >
          Reset
        </button>
        {this.state.counters.map(counter => (
          <Counter
            key={counter.id}
            onDecrement={this.handleDecrement}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
            counter={counter} // this 'counter' object encapsulates all the props / data within it and save us from redundant explicit prop declaration
          />
        ))}
      </div>
    );
  }
}

export default Counters;
