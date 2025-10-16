import React from 'react'
import NavBar from './NavBar'
import { Outlet } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Footer from './Footer'

function Layout() {
  return (
   <>
    <div className="d-flex flex-column min-vh-100">
    <NavBar />
   <main className="flex-grow-1">
     <Outlet></Outlet>
   </main>
    
     <Footer/>
 
   </div>
   </>
  )
}

export default Layout