// SFC
const Counter = ({ counter, onDelete, onIncrement }) => {
  const formatNumber = () => {
    const { value } = counter;
    return value === 0 ? "Zero" : value;
  };

  const getBadgeClass = () => {
    let className = "badge badgle-lg m-2 badge-";
    className += counter.value === 0 ? "warning" : "danger";
    return className;
  };

  return (
    <div>
      <span className={getBadgeClass()}>{formatNumber()}</span>
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
};

export default Counter;
