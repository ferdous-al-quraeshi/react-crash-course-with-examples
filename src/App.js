import React, { Component } from "react";
import NavBar from "./components/navbar";
import "./App.css";
import Counters from "./components/counters";

class App extends Component {
  state = {
    name: "Counters",
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };

  // 'constructor' (1st) hook of the MOUNTing phase
  constructor(props) {
    super(props);
    console.log("App - Constructor", this.props);
    // this.state = this.props.something.... // can be set state directly to the props here
  }

  // 'render' (2nd) hook of the MOUNTing phase
  render() {
    console.log("App - Rendered"); // along with all its children recursively
    return (
      <React.Fragment>
        <NavBar
          totalCounters={this.state.counters.filter(c => c.value > 0).length}
          onReset={this.handleReset}
        />
        <main>
          <Counters
            counters={this.state.counters}
            onDecrement={this.handleDecrement}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
          />
        </main>
      </React.Fragment>
    );
  }

  // 'componentDidMount' (3rd) hook of the MOUNTing phase
  componentDidMount() {
    // perfect place to make AJAX call to get data from the server
    console.log("App - Mounted");
    // this.setState(to the recieved data...)
  }

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
}

export default App;
