import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home';
import Billing from './components/Billing/Billing';
import Users from './components/Users/Users';
import Support from './components/Support/Support';
import Profile from './components/Profile/Profile';
import { setupInitialData } from './Utils/LocalStorageHelper';

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
  },
  {
    path: "/support",
    element: <Support />
  },
  {
    path: "/profile",
    element: <Profile />
  }
])

// Ensure initial data is in localStorage before any React components render
setupInitialData()

function App() {
  return (<RouterProvider router={router} />)
}

export default App
