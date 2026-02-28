import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home'
import Billing from './components/Billing/Billing'
import Users from './components/Users/Users'
import { setupInitialData } from './Utils/LocalStorageHelper'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
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

// Ensure initial data is in localStorage before any React components render
setupInitialData()

function App() {
  return (<RouterProvider router={router} />)
}

export default App
