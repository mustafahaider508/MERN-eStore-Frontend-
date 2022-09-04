import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { NavLink } from 'react-router-dom';
import "./Men.css";
import "./Dashboard.css"



export default function Dashboard() {
 

  return (
      <>

<div className='background_pic'>
  

          
       
  <h3>Dashboard </h3>
  <h3>Shop / Dashboard</h3>
  </div>

      <Container style={{marginTop:"50px",marginBottom:"50px"}} maxWidth='xl'>


      <Grid container>
          <Grid  item lg={3}>

          <Card style={{background:"#f8f8f8"}} variant='outlined' sx={{ maxWidth: 345 }}>
      <CardContent>
          <div style={{paddingBottom:"30px"}}>
          <img src="logo.png" alt='' />
          <h5>Fashion store</h5>
          <h6>750 followers | 10 review</h6>
         <h6>mark.enderess@mail.com</h6>
         </div>
          <h4 style={{paddingTop:"10px"}}>
          <NavLink  className="link" to='/dashboard'>
           Dashboard
        </NavLink>
          </h4>
          <h4>
          <NavLink className="link" to='/product'>
            Products
        </NavLink>
          </h4>
          <h4>
          <NavLink className="link" to='/veiw_products'>
           view Products
        </NavLink>
          </h4>
       
       
        
        
      </CardContent>
    
    </Card>
          
          </Grid>

          <Grid item lg={9}>

          </Grid>

      </Grid>
      </Container>
   
    </>
  );
}

