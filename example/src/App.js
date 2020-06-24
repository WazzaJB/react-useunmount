import React, { useState, useEffect } from "react";
import { useUnmount } from "react-useunmount";

const CounterComponent = () => {
  let [counter, setCounter] = useState(0);

  useUnmount(
    ([refCounter]) => {
      console.log("Custom useUnmount counter:", refCounter);
    },
    [counter]
  );

  useEffect(() => {
    return () => {
      console.log("Standard useEffect unmount counter:", counter);
    };
  }, []);

  return (
    <fieldset>
      <h2>Counter Component: {counter}</h2>
      <button onClick={() => setCounter((c) => c + 1)}>Increase counter</button>
    </fieldset>
  );
};

const App = () => {
  let [toggle, setToggle] = useState(false);

  return (
    <div>
      <h3>Component is: {toggle ? "Mounted" : "Unmounted"}</h3>
      <div>{toggle && <CounterComponent />}</div>
      <br />
      <button onClick={() => setToggle((c) => !c)}>
        {!toggle ? "Mount" : "Unmount"}
      </button>
    </div>
  );
};
export default App;
