import { Grid,Container } from '@mui/material'
import React from 'react'

function Footer() {
  return (
    <div style={{background:"#f9f9f9"}}>
        <Container maxWidth="lg" style={{paddingTop:"50px"}} >

     
        <Grid container spacing={2}>
            <Grid items xs={12} md={6} lg={4}>
                 <img src="/Orlo Couturepng.png" style={{width:"200px",padding:0,margin:0}} alt='' />
                
            </Grid>
            <Grid items xs={12} md={6} lg={4}>
                 <h4 style={{color: "#222",marginBottom: "25px",textTransform: "uppercase",fontWeight: 700,fontSize: "18px",
    lineHeight: "1"}}>My Account</h4>
                 <p style={{color: "#777",textTransform: "capitalize",fontSize: "14px"}}>Uomini</p>
                 <p style={{color: "#777",textTransform: "capitalize",fontSize: "14px"}}>Donna</p>
                 <p style={{color: "#777",textTransform: "capitalize",fontSize: "14px"}}>Vintage</p>
                 <p style={{color: "#777",textTransform: "capitalize",fontSize: "14px"}}>Accessori</p>
                 <p style={{color: "#777",textTransform: "capitalize",fontSize: "14px"}}>Di</p>
            </Grid>
            <Grid items xs={12} md={6} lg={4}> 
            <h4 style={{color: "#222",marginBottom: "25px",textTransform: "uppercase",fontWeight: 700,fontSize: "18px",
   lineHeight: "1"}}>store information</h4> 
      
      <p style={{color: "#777",textTransform: "capitalize",fontSize: "14px"}}>Mandaci una email: Info@orlocouture.com</p>

            </Grid>

        </Grid>
        </Container>
      
    </div>
  )
}

export default Footer
