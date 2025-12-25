
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import { Register } from './components/Pages/Register'
import { Login } from './components/Pages/Login'
import { HomePage } from './components/Pages/HomePage'
import { Layout } from './components/Pages/Layout'

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/HomePage",
          element: <HomePage />,
        },
      ]
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/login",
      element: <Login />,
    },

  ])
  return <RouterProvider router={router} />
}

export default App
