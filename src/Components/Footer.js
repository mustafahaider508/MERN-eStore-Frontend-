import { Grid,Container } from '@mui/material'
import React from 'react'

function Footer() {
  return (
    <div style={{background:"#f9f9f9"}}>
        <Container maxWidth="lg" style={{paddingTop:"50px"}} >

     
        <Grid container spacing={2}>
            <Grid items xs={12} md={6} lg={4}>
                 <img src="/Orlo Couturepng.png" style={{width:"200px",padding:0,margin:0}} alt='' />
                 <p style={{marginTop:"30px",lineHeight: "32px",letterSpacing: ".03em",marginBottom:"0",fontSize: "14px",color: "#777"}}>Orlo è un giovane progetto,un laboratorio creativo dove ogni singolo prodotto è un pezzo unico. Ci basiamo sui fattori fondamentali che contraddistinguono il made in italy tra i quali bellezza , stile e cura del dettaglio.</p>
            </Grid>
            <Grid items xs={12} md={6} lg={4}>
                 <h4 style={{color: "#222",marginBottom: "25px",textTransform: "uppercase",fontWeight: 700,fontSize: "18px",
    lineHeight: "1"}}>My Account</h4>
                 <p style={{color: "#777",textTransform: "capitalize",fontSize: "14px"}}>Men</p>
                 <p style={{color: "#777",textTransform: "capitalize",fontSize: "14px"}}>Women</p>
                 <p style={{color: "#777",textTransform: "capitalize",fontSize: "14px"}}>Clothing</p>
                 <p style={{color: "#777",textTransform: "capitalize",fontSize: "14px"}}>Accessories</p>
                 <p style={{color: "#777",textTransform: "capitalize",fontSize: "14px"}}>About</p>
            </Grid>
            <Grid items xs={12} md={6} lg={4}> 
            <h4 style={{color: "#222",marginBottom: "25px",textTransform: "uppercase",fontWeight: 700,fontSize: "18px",
   lineHeight: "1"}}>store information</h4> 
      <p style={{color: "#777",textTransform: "capitalize",fontSize: "14px"}}>Call Us: +393664275077</p>
      <p style={{color: "#777",textTransform: "capitalize",fontSize: "14px"}}>Email Us: Info@orlocouture.com</p>
      <p style={{color: "#777",textTransform: "capitalize",fontSize: "14px"}}>Fax: Info@orlocouture.com</p>
            </Grid>

        </Grid>
        </Container>
      
    </div>
  )
}

export default Footer
