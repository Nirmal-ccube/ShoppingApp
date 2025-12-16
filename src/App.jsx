import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home'
import Billing from './components/Billing/Billing'
import Users from './components/Users/Users'
import { useEffect } from 'react'
import { setupInitialData } from './Utils/LocalStorageHelper.ts'

function App() {

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

  useEffect(() => {
    setupInitialData()
  }, []);

  return (
    <RouterProvider router={router}>
      <Home />
    </RouterProvider>
  )
}

export default App
