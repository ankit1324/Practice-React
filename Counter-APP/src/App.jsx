import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  function incrementCount() {
    setCount(count + 1);
  }

  function decrementCount() {
    setCount(count - 1);
  }

  const reset = () => {
    setCount(0);
  };
  return (
    <>
      <h1>Counter</h1>
      <button className="reset" onClick={reset}>
        RESET
      </button>
      <h1>
        <button className="inc" onClick={incrementCount}>
          +
        </button>
      </h1>
      <h1>{count}</h1>
      <h1>
        <button className="dec" onClick={decrementCount}>
          -
        </button>
      </h1>
    </>
  );
}

export default App;
