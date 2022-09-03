import React from 'react'
import 'react-slideshow-image/dist/styles.css';
import "./Slider_home.css"
import Carousel from 'react-bootstrap/Carousel';

function Slider_home() {
   
  return (
    <div>
      

<Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/women.png"
          alt="First slide"
        />
        <Carousel.Caption>
        <span className='span1'>Welcom to Fashion</span>
                    <h1 className='span2'>Women Fashion</h1>
                    <button  className="Btn1" >Shop Now</button> 
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/men (1).png"
          alt="Second slide"
        />

        <Carousel.Caption>
        <span className='span1'>Welcom to Fashion</span>
                    <h1 className='span2'>Men Fashion</h1>
                    <button  className="Btn1" >Shop Now</button> 
                
        </Carousel.Caption>
      </Carousel.Item>
      
    </Carousel>
  

      
    </div>
  )
}

export default Slider_home

