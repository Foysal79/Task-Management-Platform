import React from 'react'
import ReactDOM from 'react-dom/client'
import AuthProvider from './Provider/AuthProvider.jsx'
import './index.css'
import Router from './Router/Router.jsx'
import { RouterProvider } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import {  QueryClient, QueryClientProvider } from '@tanstack/react-query'
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
    <AuthProvider>

    <QueryClientProvider client={queryClient}>
    <RouterProvider router={Router} />
    </QueryClientProvider>
    
    </AuthProvider>
    </HelmetProvider>
   
  </React.StrictMode>,
)
