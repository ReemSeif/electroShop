import React, { useEffect, useState } from 'react'

import { Col, Container, Row } from 'react-bootstrap'
import Item from './Item'


function Store() {
   const [storeItems, setStoreItems] = useState([])

  useEffect(() => {
    fetch('/data/items.json') 
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch items')
        return res.json()
      })
      .then((data) => setStoreItems(data))
      .catch((err) => console.error(err))
  }, [])
  return (
   <>
   <Container className='my-2'>
    <Row md={2} xs={1} lg={4} className='g-3'>
       {storeItems.map((item)=>(
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