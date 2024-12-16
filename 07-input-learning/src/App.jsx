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

// import React, { useRef } from 'react'

// const App = () => {

//   const inputRef = useRef(null);

//   const inputHandler = (event) => {
//     const inputText = inputRef.current.value;
//     console.log(inputText);
//   }

//   return (
//     <div>
//       <h1>Input Learning</h1>
//       <input
//         type="text"
//         placeholder='enter something here...'
//         ref={inputRef}
//       />
//       <button onClick={inputHandler}>Show Input</button>
//     </div>
//   )
// }

// export default App

// import React, { useState } from "react";

// const App = () => {

//   const [inputValue, setInputValue] = useState('');

//   const inputHandler = (event) => {
//     setInputValue(event.target.value)
//   }
//   return (
//     <div>
//       <input 
//         type="text" 
//         placeholder="enter your name ...."
//         value={inputValue}
//         onChange={inputHandler}
//       />
//       <h1>hello {inputValue}</h1>
//     </div>
//   );
// };

// export default App;


import React, { useState } from 'react'

const App = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const nameHandler = (event) => {
    setName(event.target.value);
  };

  const emailHandler = (event) => {
    setEmail(event.target.value);
  };

  return (
    <div>
      <input 
        type="text"
        id='name'
        placeholder='enter name' 
        onChange={nameHandler}
        value={name}
      />

      <br />
      <br />

      <input 
        type="email" 
        id='email'
        placeholder='enetr email'
        value={email}
        onChange={emailHandler}
      />

      <h1>Hello, {name} - Your email: {email}</h1>
    </div>
  )
}

export default App