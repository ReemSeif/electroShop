import React from 'react'
import { Button, Container, Nav, Navbar } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { useCart } from '../context/CartContext';
function NavBar() {
  const {cartQuantity, openCart} = useCart();
  return (
    <Navbar sticky='top' className='bg-whte shadow-sm mb-3'>
      
      <Container>
        <Nav className='me-auto'>
          <Nav.Link as={NavLink} to="home">Home</Nav.Link>
          <Nav.Link as={NavLink} to="store">Store</Nav.Link>
          <Nav.Link as={NavLink} to="about">About</Nav.Link>
        </Nav>
        <Button onClick={openCart} variant='outline-dark' className='rounded-circle' style={{ width: '3rem', height: '3rem', position: 'relative' }}>
          <svg fill="currentColor" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 31 25" xml:space="preserve">
            <path d="M29.747,2.496c-0.815-0.14-1.59,0.415-1.727,1.232L25.361,13H9.203L5.55,2.039C5.144,0.819,4.007,0,2.721,0H1.5
		C0.672,0,0,0.672,0,1.5S0.672,3,1.5,3l1.204-0.013l5.07,15.214c0.522,1.565,1.924,2.639,3.547,2.772
		c-0.329,0.423-0.533,0.948-0.533,1.526c0,1.381,1.119,2.5,2.5,2.5s2.5-1.119,2.5-2.5c0-0.565-0.194-1.081-0.512-1.5H20.3
		c-0.317,0.419-0.512,0.935-0.512,1.5c0,1.381,1.119,2.5,2.5,2.5s2.5-1.119,2.5-2.5c0-0.565-0.194-1.081-0.512-1.5h1.512
		c0.828,0,1.5-0.672,1.5-1.5s-0.672-1.5-1.5-1.5h-14.13c-0.472,0-0.888-0.301-1.038-0.748L10.203,16h15.329
		c1.556,0,2.646-1.407,2.941-2.742c0.506-2.289,2.506-9.035,2.506-9.035C31.116,3.404,30.564,2.633,29.747,2.496z"/>

          </svg>
          <div className='rounded-circle bg-danger' style={{ position: 'absolute', width: '1.4rem', height: "1.4rem", bottom: 0, right: 0, transform: "translate(25% , 25%)" }}>{cartQuantity}</div>
        </Button>
      </Container>
    </Navbar>
  )
}

export default NavBar