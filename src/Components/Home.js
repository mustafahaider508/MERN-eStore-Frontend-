import React from 'react';
import Header from './Header';
import Sliderhome from './Slider_home';
import Catagories from './Catagories';
import ProductCard from './Product_Card';
import ProductCard2 from './Product_Card2';
import BackgroundPic from './BackgroundPic';
import "./Catagories.css"
import BeforeFooter from './BeforeFooter';

function Home() {
  return (
    <>
       <Header />
       <Sliderhome />
   <Catagories />
      <ProductCard />
      <BackgroundPic />
      <p className='specialOffer'>Special Offer</p>
    <h2 className='headingg1'>SPECIAL PRODUCTS</h2>
      <div className='dividerr'></div>
      <ProductCard2 />
      <BeforeFooter />   
 
      
    </>
  )
}

export default Home
