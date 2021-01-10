import React, { Component } from "react";
import NavBar from "./components/navbar";
import Counters from "./components/counters";

export default class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  handleDelete = (counterId) => {
    const counters = this.state.counters.filter(
      (counter) => counter.id !== counterId
    );
    this.setState({ counters });
  };

  handleReset = () => {
    let { counters } = this.state;
    counters = counters.map((counter) => ({ ...counter, value: 0 }));
    this.setState({ counters });
  };

  handleIncrement = (selectedCounter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(selectedCounter);
    counters[index] = { ...selectedCounter };
    counters[index].value++;
    this.setState({ counters });
  };

  

  render() {
    const { counters } = this.state;
    const { handleDelete, handleReset, handleIncrement } = this;
    return (
      <div className='App'>
        <NavBar numbers={counters.filter(({ value }) => value > 0).length} />
        <Counters
          counters={counters}
          onDelete={handleDelete}
          onReset={handleReset}
          onIncrement={handleIncrement}
        />
      </div>
    );
  }
}
