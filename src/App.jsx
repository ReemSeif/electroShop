import { useState } from 'react'
import './App.css'
import { Container } from 'react-bootstrap'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/Home'
import Store from './components/Store'
import About from './components/About'
import CartContext from './context/CartContext'

function App() {
 
let router=createBrowserRouter([
  {
    path: '', element:<Layout />,
    children: [
      {path: 'home', element: <Home/>},
      {path: 'store' , element:<Store/>},
       {path: 'about' , element:<About/>}
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
