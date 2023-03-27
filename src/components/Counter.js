import classes from './Counter.module.css';
import {useDispatch, useSelector} from 'react-redux';

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter);
  const show = useSelector(state => state.showCounter);


  const incrementHandler = () => {
    dispatch({type: 'ADD'})
  }
  const decrementHandler = () => {
    dispatch({type: 'MINUS'})
  }
  const increase = () => {
    dispatch({type: 'increase', amount: 5})
  }

  const toggleCounterHandler = () => {
    dispatch({type: 'toggle'});
  };

  
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>increment+</button>
        <button onClick={increase}>increment+ 5</button>
        <button onClick={decrementHandler}>decrement-</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
