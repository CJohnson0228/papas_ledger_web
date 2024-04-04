import { createBrowserRouter } from 'react-router-dom'
import ErrorPage from './ErrorPage'
import Landing from './Landing'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Landing />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/dashboard',
    element: <div style={{ color: 'black' }}>Dashboard</div>,
  },
])
