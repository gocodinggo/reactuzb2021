import { Component } from "react";
// SFC - stateless functional component

class Counter extends Component {
  formatNumber = () => {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  };

  getBadgeClass = () => {
    let className = "badge badgle-lg m-2 badge-";
    className += this.props.counter.value === 0 ? "warning" : "danger";
    return className;
  };

  componentWillUnmount() {
    console.log("UnMounting Component : ", this.props.counter);
  }
  render() {
    const { counter, onDelete, onIncrement } = this.props;
    return (
      <div>
        <span className={this.getBadgeClass()}>{this.formatNumber()}</span>
        <button
          onClick={() => onIncrement(counter)}
          className='btn btn-primary m-2'>
          Increment
        </button>
        <button
          onClick={() => onDelete(counter.id)}
          className='btn btn-danger m-2'>
          Delete
        </button>
      </div>
    );
  }
}

export default Counter;
