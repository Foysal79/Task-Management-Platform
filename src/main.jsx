import React from 'react'
import ReactDOM from 'react-dom/client'
import AuthProvider from './Provider/AuthProvider.jsx'
import './index.css'
import Router from './Router/Router.jsx'
import { RouterProvider } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
    <AuthProvider>
    <RouterProvider router={Router} />
    </AuthProvider>
    </HelmetProvider>
   
  </React.StrictMode>,
)
