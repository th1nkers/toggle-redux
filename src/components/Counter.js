import classes from './Counter.module.css';
import React,{Component} from 'react'
import {useDispatch, useSelector, connect} from 'react-redux';

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter);


  const incrementHandler = () => {
    dispatch({type: 'ADD'})
  }
  const decrementHandler = () => {
    dispatch({type: 'MINUS'})
  }


  const toggleCounterHandler = () => {};

  
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={incrementHandler}>increment+</button>
        <button onClick={decrementHandler}>decrement-</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default connect(mapStateToProps,mapDispatchToProps)(Counter);
