import React from 'react';
import Header from './Header';
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
   <Catagories />
      <ProductCard />
      <BackgroundPic />
      <p className='specialOffer'>
Offerta speciale</p>
    <h2 className='headingg1'>ORLO PRIVÈS</h2>
      <div className='dividerr'></div>
      <ProductCard2 />
      <BeforeFooter />   
 
      
    </>
  )
}

export default Home
