import Counter from "./counter";

const Counters = ({ counters, onReset, onDelete, onIncrement }) => {
  return (
    <div className='px-3'>
      <button onClick={onReset} className='btn btn-info m-2'>
        Reset
      </button>
      {counters.map((counter) => (
        <Counter
          onIncrement={onIncrement}
          onDelete={onDelete}
          key={counter.id}
          counter={counter}
        />
      ))}
    </div>
  );
};

export default Counters;
