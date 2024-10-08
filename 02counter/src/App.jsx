import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(15);

  const addValue = () => {
    if (counter === 20) alert("no more INCREMENT!");
    else {
      setCounter(counter + 1);
      // setCounter((prevCounter) => prevCounter + 1); // NOTE: initially we were not holding the previous value that's why we are not getting the desired answer, callback is saviour for such situations.
    }
  };

  return (
    <>
      <h1>Debug Codez</h1>
      <h3>counter value: {counter} </h3>
      <button onClick={addValue}>increment</button>
      <button
        onClick={() =>
          counter === 0 ? alert("no more DECREMENT!") : setCounter(counter - 1)
        }
      >
        decrement
      </button>
      <p>Footer Section {counter} </p>
    </>
  );
}

export default App;
