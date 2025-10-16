import React from 'react'
import Storeitems from '../data/items.json'
import { Col, Container, Row } from 'react-bootstrap'
import Item from './Item'
import Cart from './Cart'

function Store() {
  return (
   <>
   <Container className='my-2'>
    <Row md={2} xs={1} lg={4} className='g-3'>
       {Storeitems.map((item)=>(
        <Col key={item.id}
        >
            <Item {...item}/>
        </Col>
       ))}
    </Row>
  
    </Container>
   </>
    
  )
}

export default Store