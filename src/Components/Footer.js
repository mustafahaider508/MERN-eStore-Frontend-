import { Grid,Container } from '@mui/material'
import React from 'react'

function Footer() {
  return (
    <div style={{background:"#f9f9f9"}}>
        <Container maxWidth="lg" style={{paddingTop:"50px"}} >

     
        <Grid container spacing={2}>
            <Grid items xs={12} md={6} lg={9}>
                 <img src="/Orlo Couturepng.png" style={{width:"200px",padding:0,margin:0}} alt='' />
                
            </Grid>
           
              
        </Grid>
        </Container>
      
    </div>
  )
}

export default Footer
