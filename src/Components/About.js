import { Container, Grid } from '@mui/material';
import React from 'react'
import Header from './Header';
import "./Men.css"

function About() {
  return (
    <>
      <Header />
      

          <Container maxWidth="lg">
              <Grid container spacing={4}>
                  <Grid item lg={6}>
                  <h2 style={{marginTop:"30px",fontSize:"35px",fontWeight:600}}>Chi siamo</h2>
           <p style={{marginTop:"30px",color:"grey",fontSize:"19px"}} >Orlo è un giovane progetto,un laboratorio creativo dove ogni singolo prodotto è un pezzo unico. Ci basiamo sui fattori fondamentali che contraddistinguono il made in italy tra i quali bellezza , stile e cura del dettaglio. 
"Nulla si crea,nulla si distrugge ,tutto si trasforma" 
Furono le parole di uno dei più grandi fisici francesi Antoine-Laurent Levoisier. 
Ed è proprio da questa teoria che nasce il nostro concept store: dare nuova vita ad ogni capo, mixando così vari stili, tendenze e generi.</p>
                  </Grid>

                  <Grid item lg={6}>
                  <img style={{width:"100%",height:"60vh"}} src="https://images.unsplash.com/photo-1595665593673-bf1ad72905c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2xvdGhpbmclMjBzdG9yZXxlbnwwfHwwfHw%3D&w=1000&q=80" alt='' />
                  </Grid>

              </Grid>
             
         
           
          </Container>
      
    </>
  )
}

export default About
