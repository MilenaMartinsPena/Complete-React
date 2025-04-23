// src/features/counter/Counter.jsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount } from './CounterSlice';

const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);

  const handleIncrement = () => dispatch(increment());
  const handleDecrement = () => dispatch(decrement());
  const handleIncrementByAmount = () => dispatch(incrementByAmount(5));

  return (
    <div style={styles.container}>
      <h2>Counter</h2>
      <p style={styles.count}>{count}</p>
      <div>
        <button onClick={handleDecrement} style={styles.button}>-1</button>
        <button onClick={handleIncrement} style={styles.button}>+1</button>
        <button onClick={handleIncrementByAmount} style={styles.button}>+5</button>
      </div>
    </div>
  );
};

// Simple inline styles for better visualization
const styles = {
  container: {
    border: '1px solid #ccc',
    padding: '1rem',
    marginBottom: '1rem',
    borderRadius: '8px',
    textAlign: 'center',
  },
  count: {
    fontSize: '2rem',
    margin: '1rem 0',
  },
  button: {
    margin: '0 0.5rem',
    padding: '0.5rem 1rem',
    fontSize: '1rem',
  },
};

export default Counter;
