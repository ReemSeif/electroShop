import React from 'react'
import NavBar from './NavBar'
import { Outlet } from 'react-router-dom'
import { Container } from 'react-bootstrap'

function Layout() {
  return (
   <>
    <NavBar />
   
     <Outlet></Outlet>
 
 
   
   </>
  )
}

export default Layout