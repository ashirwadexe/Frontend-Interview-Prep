//------------------------------------------------------------
//-----How would you show/hide a component in React?"
//------------------------------------------------------------

import React, { useState } from 'react'

const App = () => {

  const [isVisible, setIsVisible] = useState(true);

  const toggle = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      <button onClick={toggle}>
        {isVisible ? "Hide" : "Show"} Component
      </button>

      {
        isVisible && <MyComponent/>
      }
    </div>
  )
}

function MyComponent() {
  return <h1>Ashirwad</h1>
}

export default App