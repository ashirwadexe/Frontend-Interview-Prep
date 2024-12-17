import React, { useState } from "react";
import "./App.css";

const App = () => {

  const [isLogin, setIsLogin] = useState(true);
  
  const [inputValue, setInputValue] = useState({
    name: "",
    email: "",
    password: "",
  });

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setInputValue((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert(`
      ${isLogin ? "Sign Up Successful" : "Login Successfull"} 
      Name: ${inputValue.name}
      Email: ${inputValue.email}
      Password: ${inputValue.password}
    `);

    setIsLogin(!isLogin);

    setInputValue({
      name: "",
      email: "",
      password: "",
    })
  };

  return (
    <div className="container">

      <h2>{isLogin ? "SignUp" : "Login"}</h2>

      <form onSubmit={handleSubmit}>
        {isLogin ? (
          <>
            <div className="input-box">
              <input
                type="text"
                placeholder="Name"
                name="name"
                value={inputValue.name}
                id="name"
                onChange={inputHandler}
                required
              />
              <input
                type="email"
                placeholder="Email"
                name="email"
                value={inputValue.email}
                id="email"
                onChange={inputHandler}
                required
              />
              <input
                type="password"
                placeholder="Password"
                name="password"
                value={inputValue.password}
                id="password"
                onChange={inputHandler}
                required
              />
            </div>
          </>
        ) : (
          <>
            <div className="input-box">
            <input
                type="email"
                placeholder="Email"
                name="email"
                value={inputValue.email}
                id="email"
                onChange={inputHandler}
                required
              />
              <input
                type="password"
                placeholder="Password"
                name="password"
                value={inputValue.password}
                id="password"
                onChange={inputHandler}
                required
              />
            </div>
          </>
        )}

        <button className="btn" type="submit">
          {isLogin ? "Sign Up" : "Login"}
        </button>
      </form>

      <p className="reset-pass">
        {!isLogin
          ? "Forgot password ?"
          : "Already Have an Account ? Login here"}
      </p>
    </div>
  );
};

export default App;
