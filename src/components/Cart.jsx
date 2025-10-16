import React from 'react'
import { Offcanvas , Stack } from 'react-bootstrap'
import { useCart } from '../context/CartContext';
import CartItem from './CartItem';
import Storeitems from '../data/items.json'
function Cart({isOpen}) {
    const {cartitems , closeCart } = useCart();

  return (
    <Offcanvas show={isOpen} placement='end' onHide={closeCart}>
        <Offcanvas.Header closeButton>
            <Offcanvas.Title>Shopping Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Stack gap={3} >
         {cartitems?.map((item)=>{
            return <CartItem key={item.id} {...item}/>
          
         })}
          <div className="fs-6">
            Total{" "}
          {
        cartitems.reduce((total , cartItem)=> {
               const item = Storeitems.find((i) => i.id === cartItem.id);
                return total + (item?.price || 0) * cartItem.quantity;
        } ,0)
    }
    </div>
    </Stack>
        </Offcanvas.Body>
        </Offcanvas>
  )
}

export default Cart