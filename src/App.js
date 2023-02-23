import "./App.css";
import Counter from "./components/Counter.js";
import { useState } from "react";
import Stats from "./components/Stats";
import HooksCounter from "./components/HooksCounter";

function App() {
  /*
 this codes demonstrate how to manage states with react state management

   // react state management code starts here

  const initialState = [
    { id: 1, count: 0 },
    { id: 2, count: 0 },
  ];

  const [state, setState] = useState(initialState);

  const totalCount = () => {
    return state.reduce((total, counter) => total + counter.count, 0);
  };

  const increment = (id) => {
    const updatedCounter = state.map((c) => {
      if (c.id === id) {
        return {
          ...c,
          count: c.count + 1,
        };
      }
      return { ...c };
    });
    setState(updatedCounter);
  };

  const decrement = (id) => {
    const updatedCounter = state.map((c) => {
      if (c.id === id) {
        return {
          ...c,
          count: c.count - 1,
        };
      }
      return { ...c };
    });
    setState(updatedCounter);
  };

  // react state management code ends here
*/

  // starts with  react-redux

  return (
    <div className="App">
      <div class="w-screen h-screen p-10 bg-gray-100 text-slate-700">
        {/* <!-- header --> */}
        <h1 class="max-w-md mx-auto text-center text-2xl font-bold">
          Simple Counter Application
        </h1>

        {/* <!-- counters --> */}
        <div class="max-w-md mx-auto my-10 space-y-5">
          {/* {state.map((count) => (
            <Counter
              key={count.id}
              id={count.id}
              count={count.count}
              increment={increment}
              decrement={decrement}
            ></Counter>
          ))} */}
          <Counter />
          <HooksCounter />
        </div>

        {/* <Stats count={totalCount()}></Stats> */}
      </div>
    </div>
  );
}

export default App;
