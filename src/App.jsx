
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import { Register } from './components/Pages/Register'
import { Login } from './components/Pages/Login'

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ])
  return <RouterProvider router={router} />
}

export default App
