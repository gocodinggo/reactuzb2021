import React, { Component } from "react";
import Counter from "./counter";
class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 8 },
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
    const { counters } = this.state;
    const index = counters.indexOf(selectedCounter);
    const counter = counters[index];
    counter.value++;
    this.setState({ counters });
  };

  render() {
    const { counters } = this.state;
    return (
      <div>
        <button onClick={this.handleReset} className='btn btn-info m-2'>
          Reset
        </button>
        {counters.map((counter) => (
          <Counter
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
            key={counter.id}
            counter={counter}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
