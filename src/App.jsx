import { useState } from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/Home'
import Store from './components/Store'
import CartContext from './context/CartContext'
import Login from './components/Login'
import SignUp from './components/SignUp'
import AuthProvider from './context/AuthContext'
import ProtectedRoute from './components/ProtectedRoute'
import Profile from './components/Profile'

function App() {
 
let router=createBrowserRouter([
  {
    path: '', element:<Layout />,
    children: [
      {index: true, element: <Home/>},
      {path: 'store' , element:(
        <ProtectedRoute><Store/></ProtectedRoute>
      )},
      {path: 'profile' , element:(
      <ProtectedRoute><Profile/></ProtectedRoute>
      )},
      {path:'login' , element:<Login/>},
      {path:'signup' , element:<SignUp/>}
    ]
  },
  {path: '*', element: <h1>Page Not Found</h1> }
])
  return (
    <AuthProvider>
    <CartContext >
       <RouterProvider router={router}>
   </RouterProvider>
    </CartContext>
  </AuthProvider>
   
    
  )
}

export default App
