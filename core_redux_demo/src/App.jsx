// import { useState } from "react";
import { connect } from "react-redux";
import { addNumber, substractNumber } from "./actions/counterAction";
import "./App.css";
import store from "./store/store";

function App(props) {
  console.log("props",props);
  const { count } = props;
  console.log("count", count);
  // const [counter, setCounter] = useState(store.getState());

  return (
    <div className="App">
      <div>Counter: {count}</div>
      <button
        onClick={() => {
          store.dispatch(addNumber());
          // setCounter(store.getState());
        }}
      >
        Add
      </button>
      <button
        onClick={() => {
          store.dispatch(substractNumber());
          // setCounter(store.getState());
        }}
      >
        Substract
      </button>
    </div>
  );
}

const mapStateToProps = (state) => {
  console.log("state", state);
  return {
    count: state,
  }
}

export default connect(mapStateToProps)(App);
