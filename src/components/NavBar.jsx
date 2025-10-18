import React from 'react'
import { Button, Container, Nav, Navbar } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
function NavBar() {
  const { cartQuantity, openCart } = useCart();
  const {currentuser} = useAuth();
  return (
    <Navbar sticky='top' className='bg-whte shadow-sm'>

      <Container>
        <div className="d-flex align-items-center me-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="currentColor"
            className="bi bi-bag-check"
            viewBox="0 0 16 16"
          >
            <path d="M10.5 3.5A1.5 1.5 0 0 1 12 5v1h-1V5a.5.5 0 0 0-.5-.5H5A.5.5 0 0 0 4.5 5v1h-1V5A1.5 1.5 0 0 1 5 3.5h5.5zM4.5 6h7v7a1.5 1.5 0 0 1-1.5 1.5h-4A1.5 1.5 0 0 1 4.5 13V6zm2.854 2.354a.5.5 0 0 0-.708-.708L5.5 8.793l-.646-.647a.5.5 0 1 0-.708.708l1 1a.5.5 0 0 0 .708 0l1.5-1.5z" />
          </svg>
          <h5 className="m-0 fw-bold">ElectroShop</h5>
        </div>
        <Nav className='me-auto'>
          <Nav.Link as={NavLink} to="/">Home</Nav.Link>
          <Nav.Link as={NavLink} to="store">Store</Nav.Link>
        </Nav>
        {
          currentuser && <Button onClick={openCart} variant='outline-dark' className='rounded-circle' style={{ width: '3rem', height: '3rem', position: 'relative' }}>
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
        }
        
      <Nav.Link
        as={NavLink}
           to={currentuser ? "/profile" : '/login'}
         className="d-flex justify-content-center align-items-center border border-dark rounded-circle text-dark ms-2"
  style={{ width: '3rem', height: '3rem' }}
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    fill="currentColor"
    className="bi bi-person"
    viewBox="0 0 16 16"
  >
    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
    <path
      fillRule="evenodd"
      d="M8 9a5 5 0 0 0-5 5v.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V14a5 5 0 0 0-5-5z"
    />
  </svg>
</Nav.Link>


      </Container>
    </Navbar>
  )
}

export default NavBar