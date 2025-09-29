import React from 'react'
import { Offcanvas } from 'react-bootstrap'
import { useCart } from '../context/CartContext';
import CartItem from './CartItem';

function Cart({isOpen}) {
    const {cartitems , closeCart} = useCart();
  return (
    <Offcanvas show={isOpen} placement='end' onHide={closeCart}>
        <Offcanvas.Header closeButton>
            <Offcanvas.Title>Shopping Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
         {cartitems?.map((item)=>{
            return <CartItem key={item.id} {...item} />
           
         })}
        </Offcanvas.Body>
        </Offcanvas>
  )
}

export default Cart