import React from 'react';
import Header from './Header';
import { Button } from '@mui/material';
import Slider_home from './Slider_home';
import Catagories from './Catagories';
import Product_Card from './Product_Card';
import BackgroundPic from './BackgroundPic';
import "./Catagories.css"
import BeforeFooter from './BeforeFooter';
import Footer from "./Footer";

function Home() {
  return (
    <>
       <Header />
       <Slider_home />
   <Catagories />
      <Product_Card />
      <BackgroundPic />
      <p className='specialOffer'>Special Offer</p>
    <h2 className='headingg1'>SPECIAL PRODUCTS</h2>
      <div className='dividerr'></div>
      <Product_Card />
      <BeforeFooter />   
 
      
    </>
  )
}

export default Home
