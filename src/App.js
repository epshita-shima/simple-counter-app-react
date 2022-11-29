import { useState } from "react";
import "./App.css";
import Counter from "./components/Counter";
import Stats from "./components/Stats";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const initialsState = [
  {
    id: 1,
    count: 0,
  },
  {
    id: 2,
    count: 0,
  },
];
function App() {
  const [state, setState] = useState(initialsState);
  const notify = () => toast("Wow so easy!");
  const totalCount = () => {
    return state.reduce((total, counter) => total + counter.count, 0);
  };

  const increment = (id) => {
    const updateCounter = state.map((c) => {
      if (c.id == id) {
        return {
          ...c,
          count: c.count + 1,
        };
      }
      return { ...c };
    });
    setState(updateCounter);
  };
  const decrement = (id) => {
    const updateCounter = state.map((c) => {
      if (c.id == id) {
        return {
          ...c,
          count: c.count - 1,
        };
      }
      return { ...c };
    });
    setState(updateCounter);
  };
  return (
    <div className="w-screen h-screen p-10 bg-gray-100 text-slate-700">
      <h1 className="max-w-md mx-auto text-center text-2xl font-bold">
        Simple Counter Application
      </h1>

      <div className="max-w-md mx-auto mt-10 space-y-5">
        {state.map((count) => (
          <Counter
            count={count.count}
            key={count.id}
            id={count.id}
            increment={increment}
            decrement={decrement}
          />
        ))}

        <Stats count={totalCount()}></Stats>
      </div>
    </div>
  );
}

export default App;
