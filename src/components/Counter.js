import classes from './Counter.module.css';
import {useDispatch, useSelector} from 'react-redux';
import {counterActions} from '../store/counter'

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter.counter);
  const show = useSelector(state => state.counter.showCounter);


  const incrementHandler = () => {
    dispatch(counterActions.increment())
  }
  const decrementHandler = () => {
    dispatch(counterActions.decrement())
  }
  const increase = () => {
    dispatch(counterActions.increase(5)) // {type: SOME_UNIQUE_IDENTIFIER, payload: 10}
  }
  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle());
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
