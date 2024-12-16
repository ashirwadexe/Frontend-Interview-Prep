// //CONTROLLER INPUT

// import React, { useState } from 'react'

// const App = () => {

//   const [inputValue, setInputValue] = useState('');

//   const inputHandler = (event) => {
//     setInputValue(event.target.value);
//   }

//   return (
//     <div>
//       <h1>Input Learning</h1>
//       <input 
//         type="text" 
//         value={inputValue}
//         onChange={inputHandler}
//         placeholder='Enter Something...'
//       />
//       <p>{inputValue}</p>
//     </div>
//   )
// }

// export default App


//UNCONTROLLER INPUT

import React, { useRef } from 'react'

const App = () => {

  const inputRef = useRef(null);

  const inputHandler = (event) => {
    const inputText = inputRef.current.value;
    console.log(inputText);
  }

  return (
    <div>
      <h1>Input Learning</h1>
      <input
        type="text"
        placeholder='enter something here...'
        ref={inputRef} 
      />
      <button onClick={inputHandler}>Show Input</button>
    </div>
  )
}

export default App