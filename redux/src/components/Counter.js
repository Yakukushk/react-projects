import { decrement, increment, toggle, incrementByAmount } from "../store/count";
import classes from "./Counter.module.css";
import { useDispatch, useSelector } from "react-redux";

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const showCounter = useSelector((state) => state.counter.showCounter);
  const dispatch = useDispatch();
  const toggleCounterHandler = () => {
    dispatch(toggle());
  };

  const incrementHandler = () => {
    dispatch(increment());
  };

  const decrementHandler = () => {
    if (count > 0) dispatch(decrement());
  };

  const increaseHandler = () => {
    dispatch(incrementByAmount(10))
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <h2>Counter: {count}</h2>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
        <button onClick={increaseHandler}>Increase By 10</button>
      </div>
      <button onClick={toggleCounterHandler}>
        {showCounter ? 'Hide' : 'Show'} Counter
      </button>
    </main>
  );
};

export default Counter

// class Counter extends Component {

//   toggleCounterHandler = () => {};

//   incrementHandler = () => {
//     this.props.increment();
//   };

//   decrementHandler = () => {
//     if (this.props.counter > 0) this.props.decrement();
//   };

//   render(){
//   return (
//     <main className={classes.counter}>
//       <h1>Redux Counter</h1>
//       <div className={classes.value}>{this.props.counter}</div>
//       <div>
//         <button onClick={this.incrementHandler.bind(this)}>Increment</button>
//         <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
//       </div>
//       <button onClick={this.toggleCounterHandler.bind(this)}>Toggle Counter</button>
//     </main>
//   );
// }
// };

// const mapStateProps = state => {
//   return {
//     counter: state.counter.value
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     increment: () => dispatch(increment()),
//     decrement: () => dispatch(decrement())
//   }
// };
// export default connect(mapStateProps, mapDispatchToProps)(Counter);
