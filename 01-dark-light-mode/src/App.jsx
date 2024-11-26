import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Blog from './components/Blog'
import { ThemeProvider } from './themeProvider'

function App() {

  const appRouter = createBrowserRouter([
    {
      path:'/',
      element: <Home/>
    },
    {
      path:'/about',
      element: <About/>
    },
    {
      path:'/blog',
      element: <Blog/>
    },
  ])

  return (
    <>
      <ThemeProvider>
        <RouterProvider router={appRouter}/>
      </ThemeProvider>
    </>
  )
}

export default App
