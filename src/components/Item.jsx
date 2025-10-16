import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { useCart } from '../context/CartContext';

function Item({id , name , price ,imgUrl}) {
  const {getItemsCount , addtoCart , decreaseCount , removeFromCart } = useCart();
  const quantity = getItemsCount(id);
 
  return (
<Card className='h-100'>
    <Card.Img variant="top" src={imgUrl} style={{height:'250px' , objectFit:'cover'}}/>
    <Card.Body>
      <Card.Title className='d-flex justify-content-between align-items-baseline mb-4'>
         <span className='fs-6'>{name}</span>
         <span className='text-muted me-2 fs-5'> {price} EGP</span>
         </Card.Title>
    
       
        <div className='mt-auto'>
          {quantity === 0 ? (
            <Button className='w-100' variant='outline-primary' onClick={()=>addtoCart(id)}>Add to Cart</Button>
          ) : (
            <div className='d-flex align-items-center' style={{gap:'.5rem' ,width:'100%'}}>
            <div className='me-auto d-flex align-items-baseline'style={{gap:'.5rem'}}> 
               <Button variant='outline-secondary' onClick={()=>decreaseCount(id)}>-</Button>
            <span className='mx-2 fs-6' >{quantity}</span>
              <Button variant='outline-secondary' onClick={()=>addtoCart(id , price)}>+</Button>
              </div>
            <Button variant='outline-danger'onClick={()=>removeFromCart(id)}>remove</Button>
            </div>
          )}
        </div>
    </Card.Body>
</Card>
  )
}

export default Item