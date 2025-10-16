import React, { useEffect, useState } from 'react'
import { Offcanvas , Stack } from 'react-bootstrap'
import { useCart } from '../context/CartContext';
import CartItem from './CartItem';
function Cart({isOpen}) {
    const {cartitems , closeCart } = useCart();
    const [storeItems, setStoreItems] = useState([])

  useEffect(() => {
    fetch('/data/items.json')
      .then((res) => res.json())
      .then((data) => setStoreItems(data))
      .catch((err) => console.error('Error fetching items:', err))
  }, [])

  const total = cartitems.reduce((total, cartItem) => {
    const item = storeItems.find((i) => i.id === cartItem.id)
    return total + (item?.price || 0) * cartItem.quantity
  }, 0)

  return (
    <Offcanvas show={isOpen} placement='end' onHide={closeCart}>
        <Offcanvas.Header closeButton>
            <Offcanvas.Title>Shopping Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Stack gap={3} >
         {cartitems?.map((item)=>{
            return <CartItem key={item.id} {...item} storeItems={storeItems}/>
          
         })}
          <div className="fs-6">
            Total{" "}
        {total}
    </div>
    </Stack>
        </Offcanvas.Body>
        </Offcanvas>
  )
}

export default Cart