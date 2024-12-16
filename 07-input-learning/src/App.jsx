//CONTROLLER INPUT

import React, { useState } from 'react'

const App = () => {

  const [inputValue, setInputValue] = useState('');

  const inputHandler = (event) => {
    setInputValue(event.target.value);
  }

  return (
    <div>
      <h1>Input Learning</h1>
      <input 
        type="text" 
        value={inputValue}
        onChange={inputHandler}
        placeholder='Enter Something...'
      />
      <p>{inputValue}</p>
    </div>
  )
}

export default App