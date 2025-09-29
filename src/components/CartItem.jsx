import React from 'react'
import { Button, Stack } from 'react-bootstrap'
import StoreItems from '../data/items.json'
import { useCart } from '../context/CartContext';

function CartItem({id , quantity}) {
    let item =StoreItems.find(item => item.id === id);
    if (item == null) return null; // Handle case where item is not found

      const { removeFromCart } = useCart();
  return (
   <Stack direction='horizontal' className='d-flex align-items-center' gap={2} >
    <img src={item.imgUrl}
    alt='nn'
    style={{width:'150px' , objectFit:'cover' , height:'80px'}}/>
    <div className='me-auto'>
        <div>
            {item.name}
            {quantity >= 1 && (
                <div>
                     <span className='text-muted' style={{fontSize:'.8rem'}}>{quantity}</span>
                     <Button variant='outline-secondary'  className='ms-2 text-danger btn-sm'
                     onClick={() => removeFromCart(item.id)}>
                         X</Button>
                </div>
               
            )}
        </div>
        <div className='text-muted' style={{fontSize:'.8rem'}}>
            {item.price} EGP
        </div>
        <div>total :{item.price * quantity} EGP</div>
    </div>
   </Stack>
  )
}

export default CartItem