import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByAmount, reset } from './features/counter/counterSlice';

const App = () => {
  const [amount, setAmount] = useState();
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  const handleIncClick = () => {
    dispatch(increment());
  }

  const handleDecClick = () => {
    dispatch(decrement());
  }

  const handleReset = () => {
    dispatch(reset());
  }

  const handleIncAmtClick = () => {
    dispatch(incrementByAmount(amount));
  }

  return (
    <div>
      <button onClick={handleIncClick}>+</button>

      <h2>Count: {count}</h2>

      <button onClick={handleDecClick}>-</button>

      <br /><br /><br />

      <button onClick={handleReset}>Reset</button>

      <br /><br /><br />

      <input
        type="Number" 
        value={amount}
        placeholder='enter amount'
        onChange={(e) => setAmount(e.target.value)}
      />
      <br /><br /><br />

      <button onClick={handleIncAmtClick}>Inc By Amount</button>
    </div>
  )
}

export default App