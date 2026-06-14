import React from 'react'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import Login from './pages/Login'
import NotFound from './pages/NotFound'
import Root from './routes/Root'
import Quotations from './pages/Quotations'
import NewQuotation from './pages/NewQuotation'
import Clients from './pages/Clients'
import DashBoard from './pages/DashBoard'
import ProtectedRoutes from './routes/ProtectedRoutes'
import GuestRoutes from './routes/GuestRoutes'
import ClientDetailsPage from './pages/ClientDetailsPage'

// Router setup using createBrowserRouter
const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <GuestRoutes />,
      children: [
        {
          path: '/',
          element: <Login />
        },
        {
          path: '/login',
          element: <Navigate to="/" replace />
        }

      ],
      errorElement: <NotFound />
    },
    {
      element: <ProtectedRoutes />,
      errorElement: <NotFound />,
      children: [
        {
          path: '/dashboard',
          element: <DashBoard />,
          children: [
            {
              index: true,
              element: <Navigate to="clients" replace />
            },
            {
              path: 'clients',
              element: <Clients />
            },
            {
              path: 'clients/:id',
              element:<ClientDetailsPage/>
            },
            {
              path: 'quotes',
              element: <Quotations />
            },
            {
              path: 'newquote',
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