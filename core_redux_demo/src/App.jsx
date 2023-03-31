import { useState } from "react";
import { addNumber, substractNumber } from "./actions/counterAction";
import "./App.css";
import store from "./store/store";

function App() {
  const [counter, setCounter] = useState(store.getState());

  return (
    <div className="App">
      <div>Counter: {counter}</div>
      <button
        onClick={() => {
          store.dispatch(addNumber());
          setCounter(store.getState());
        }}
      >
        Add
      </button>
      <button
        onClick={() => {
          store.dispatch(substractNumber());
          setCounter(store.getState());
        }}
      >
        Substract
      </button>
    </div>
  );
}

export default App;
