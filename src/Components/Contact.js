import { Container,Grid,FormControl,TextField} from '@mui/material'
import React from 'react'
import Header from './Header'
import "./Men.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons'

function Contact() {
  return (
    <>
    <Header />
    <div className='background_pic'>
          <h3>Contatti </h3>
          <h3>Contattaci</h3>
          </div>
     <Container maxWidth="lg" style={{marginTop:"30px",marginBottom:"30px"}}>
         <Grid container>
             <Grid item lg={6}>
                 <h2 style={{marginTop:"25px",paddingLeft:"10px"}}>Contattaci</h2>
                 
                 <div style={{display:"flex",alignItems:"end",margin:"8px"}}>
                     <div style={{textAlign:"center",borderRight:"2px solid rgb(248, 248, 248)",padding:"10px"}}> 
                     <FontAwesomeIcon  className='icon' icon={faLocationDot} />
                         <p style={{textTransform:"uppercase",fontWeight:600,color:"orangered"}}>Location</p>
                
                     </div>
                  
                     <p style={{padding:"10px"}}>Italy</p>
                 </div>
                 <div style={{display:"flex",alignItems:"end",margin:"8px"}}>
                     <div style={{textAlign:"center",borderRight:"2px solid rgb(248, 248, 248)",padding:"10px"}}> 
                     <FontAwesomeIcon  className='icon' icon={faEnvelope} />
                         <p style={{textTransform:"uppercase",fontWeight:600,color:"orangered"}}>Address</p>
                
                     </div>
                  
                     <p style={{padding:"10px"}}>Info@orlocouture.com</p>
                 </div>

             </Grid>
             <Grid item lg={6}>
             <h2 style={{marginTop:"20px"}}>Mettiti in contatto</h2>
             <FormControl fullWidth sx={{ m: 1 }}><TextField  fullWidth  name="name" maxWidth="" id="standard-basic" label="name" variant="outlined"/></FormControl>
             <FormControl fullWidth sx={{ m: 1 }}><TextField  fullWidth  name="email" maxWidth="" id="standard-basic" label="email" variant="outlined"/></FormControl>
             <FormControl fullWidth sx={{ m: 1 }}><TextField  fullWidth  name="subject" maxWidth="" id="standard-basic" label="subject" variant="outlined"/></FormControl>
             <FormControl fullWidth sx={{ m: 1 }}>
            <TextField  name="message" id="outlined-multiline-static" label="Message" multiline rows={3} />  
            </FormControl>
            <button  style={{border:"none",padding:"10px",width:"200px",backgroundColor:"orangered",color:"white",marginLeft:"10px"}}>Submit</button>
             </Grid>

         </Grid>
     </Container>
    </>
  )
}

export default Contact
