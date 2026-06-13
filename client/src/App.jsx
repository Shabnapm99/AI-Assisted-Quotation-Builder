import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './pages/Login'
import NotFound from './pages/NotFound'
import Root from './routes/Root'
import Quotations from './components/Quotations'
import NewQuotation from './pages/NewQuotation'
import Clients from './components/Clients'
import DashBoard from './pages/DashBoard'
import ProtectedRoutes from './routes/ProtectedRoutes'

// Router setup using createBrowserRouter
const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Login />,
      errorElement: <NotFound />
    },
    {
      path: '/dashboard',
      element: <ProtectedRoutes />,
      errorElement: <NotFound />,
      children: [
        {
          path: '/dashboard',
          element: <DashBoard />,
          children:[
            {
              path: '/dashboard/quotes',
              element: <Quotations />
            },
            {
              path: '/dashboard/newquote',
              element: <NewQuotation />
            }
          ]
        },

      ]
    }
  ]
)

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App