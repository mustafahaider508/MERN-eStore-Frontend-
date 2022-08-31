import { Grid } from '@mui/material'
import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Divider from "@mui/material/Divider"
import Typography from '@mui/material/Typography';
import "./Catagories.css";
import { NavLink } from 'react-router-dom';

function Catagories() {
  return (
    <>
    <div className='container'>
        
    <h2 className='headingg'>Shop By Catagories</h2>
      <div className='dividerr'></div>

        



    <Grid container spacing={4}>
   
        <Grid item lg={6} md={6} xs={12}>   
         
      <NavLink style={{textDecoration:"none"}} to="/men">
        <Card variant="outlined" className="card" > 
       
    </Card>
    <h3 className='heading'  >
          Men
        </h3>
        </NavLink>
        </Grid>

        <Grid item lg={6} md={6} xs={12}>   
        <NavLink style={{textDecoration:"none"}} to="/women">
        <Card variant="outlined" className="card1" >
       
    </Card>
    <h3 className="heading" variant="h4" >
          Women
        </h3>
        </NavLink>
        </Grid>
    </Grid>
    </div>
    <p className='specialOffer'>Special Offer</p>
    <h2 className='headingg1'>TOP COLLECTION</h2>
      <div className='dividerr'></div>
    </>
  )
}

export default Catagories
