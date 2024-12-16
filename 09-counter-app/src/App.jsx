import React from 'react'
import { useState } from 'react'

const App = () => {

  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount(count + 1);
  };

  const decreaseCount = () => {
    setCount(count-1);
  };

  const resetCount = () => {
    setCount(0);
  };

  return (
    <div>
      <h1>Counter App</h1>

      <h3>Count: {count}</h3>

      <button onClick={increaseCount}>Increase</button>
      <button onClick={resetCount}>Reset</button>
      <button onClick={decreaseCount}>Decrease</button>
    </div>
  )
}

export default App