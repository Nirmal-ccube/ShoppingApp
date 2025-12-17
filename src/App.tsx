import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home'
import Billing from './components/Billing/Billing'
import Users from './components/Users/Users'
import { useEffect } from 'react'
import { setupInitialData } from './Utils/LocalStorageHelper'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/billing",
    element: <Billing />
  },
  {
    path: "/users",
    element: <Users />
  }
])

function App() {
  useEffect(() => {
    setupInitialData()
  }, []);

  return (<RouterProvider router={router} />)
}

export default App
