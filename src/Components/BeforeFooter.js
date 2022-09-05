import { Divider, Grid } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'
import {faBullhorn, faClockFour, faTruckFast } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./BeforeFooter.css";

function BeforeFooter() {
  return (
    <div>
        <Container  maxWidth="xl" style={{marginTop:"30px"}} >
            <Divider />
            <Grid container style={{paddingTop:"50px",paddingBottom:"50px"}}>
                <Grid item xs={12} lg={6}>
                    <div  style={{display:"flex",alignItems:"center",justifyContent:"center",borderRight:"1px solid #999"}}>
                    <FontAwesomeIcon style={{fontSize:"45px",alignSelf:"center",paddingRight:"10px",color:"orangered" }} icon={faTruckFast} /> 
                        <div style={{flexDirection:"column",alignItems:"center"}}>
                        <h4 style={{fontSize:"20px",lineHeight:"2"}}>SPEDIZIONE GRATUITA</h4>
                        <p  style={{fontSize:"15px",lineHeight:"0",color:"#999",fontWeight:"600"}}>Spedizione gratuita in tutto il mondo</p>
                        </div>
                        
                    </div>

                </Grid>
                <Grid item xs={12} lg={6}>
                    <div  style={{display:"flex",alignItems:"center",justifyContent:"center" }}>
                    <FontAwesomeIcon style={{fontSize:"45px",alignSelf:"center",paddingRight:"10px",color:"orangered" }} icon={faClockFour} /> 
                        <div style={{flexDirection:"column",alignItems:"center"}}>
                        <h4 style={{fontSize:"20px",lineHeight:"2"}}>SERVIZIO 24 X 7</h4>
                        <p  style={{fontSize:"15px",lineHeight:"0",color:"#999",fontWeight:"600"}}>Servizio in linea per il nuovo cliente</p>
                        </div>
                        
                    </div>

                </Grid>
          
                

            </Grid>
     
        </Container>
        <Divider style={{backgroundColor:"orangered",height:"2px"}}/>
      
      
      
    </div>
  )
}

export default BeforeFooter
