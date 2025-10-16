import { useState } from 'react'
import './App.css'
import { Container } from 'react-bootstrap'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/Home'
import Store from './components/Store'
import CartContext from './context/CartContext'
import Login from './components/Login'

function App() {
 
let router=createBrowserRouter([
  {
    path: '', element:<Layout />,
    children: [
      {index: true, element: <Home/>},
      {path: 'store' , element:<Store/>},
      {path:'login' , element:<Login/>}
    ]
  },
  {path: '*', element: <h1>Page Not Found</h1> }
])
  return (
    <CartContext >
       <RouterProvider router={router}>
   </RouterProvider>
    </CartContext>
  
   
    
  )
}

export default App
