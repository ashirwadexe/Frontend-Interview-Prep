import React from 'react'
import { Link } from 'react-router-dom'
import { useTheme } from '../themeProvider'

function Navbar() {

  const { theme, toggleTheme} = useTheme();

  return (
    <div>
        <div className='flex gap-10'>
            <Link to={"/"}>Home</Link>
            <Link to={"/about"}>About</Link>
            <Link to={"/blog"}>Blog</Link>
        </div>

        <button
          onClick={toggleTheme}

        >
          Switch to {theme === "dark" ? "light" : "dark"} Mode
        </button>
    </div>
  )
}

export default Navbar