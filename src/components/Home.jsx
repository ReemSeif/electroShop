import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

function Home() {
  return (
     <Carousel>
      <Carousel.Item>
         <img
          className="d-block w-100"
          src="imgs\bg1.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Shop Now</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
       <img
          className="d-block w-100"
          src="imgs\bg2.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Shop Now</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
       <img
          className="d-block w-100"
          src="imgs\bg3.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Shop Now</h3>
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default Home