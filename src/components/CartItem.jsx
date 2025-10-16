import React from 'react'
import { Button, Stack } from 'react-bootstrap'
import StoreItems from '../data/items.json'
import { useCart } from '../context/CartContext';

function CartItem({id , quantity}) {
    let item =StoreItems.find(item => item.id === id);
    if (item == null) return null; 
    const { removeFromCart } = useCart();
  
  return (
    <>
   <Stack direction='horizontal' className='d-flex align-items-center' gap={2} >
   
    <img src={item.imgUrl}
    alt='nn'
    style={{width:'150px' , objectFit:'cover' , height:'80px'}}/>
    <div className='me-auto'>
        <div>
            {item.name}
            {quantity >= 1 && (
                <div>
                     <span  style={{fontSize:'.9rem'}}>{quantity}</span>
                     <button className='ms-2 text-danger btn-sm bg-transparent border-0'
                     onClick={() => removeFromCart(item.id)}>
                         X</button>
                </div>
               
            )}
        </div>
        <div  style={{fontSize:'.8rem'}}>
            {item.price} EGP
        </div>
    </div>
    
   
   </Stack>
   </>
  )
}

export default CartItem