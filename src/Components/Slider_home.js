import React from 'react'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import "./Slider_home.css"

function Slider_home() {
   
  return (
    <div>
        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src="https://multikart-react.vercel.app/assets/images/home-banner/1.jpg" alt="First slide"/>
      <div className='carousel-caption  d-md-block'>
                    <span className='span1'>Welcom to Fashion</span>
                    <h1 className='span2'>Men Fashion</h1>
                    <button className='Button' >Shop Now</button> 
                
                    </div>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="..." alt="Second slide"/>
      
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="..." alt="Third slide" />
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
      
    </div>
  )
}

export default Slider_home

