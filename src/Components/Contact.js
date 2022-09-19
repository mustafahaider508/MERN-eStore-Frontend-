import { Container,Grid,FormControl,TextField,Button} from '@mui/material'
import React,{useState,useRef } from 'react'
import Header from './Header'
import "./Men.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLocationDot} from '@fortawesome/free-solid-svg-icons'
import emailjs from '@emailjs/browser';

const Result = () => {
    return <p style={{color:"green"}}>your message has been send Successfully!</p>
}

function Contact() {
 
    const [result,showresult] = useState(false);
    const form = useRef();
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_mya9dd8', 'template_17sfwye', form.current, 'KhE0p8mkM3oKmw5pZ')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset();
        showresult(true);
    };

    setTimeout(() =>{
        showresult(false);
    },5000)

  return (
    <>
    <Header />
    
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
             <form  ref={form} onSubmit={sendEmail}>
         <input style={{padding:"10px",width:"100%",margin:"10px"}} type="text"  name="user_name"  placeholder='name' /> <br />
           <input  style={{padding:"10px",width:"100%",margin:"10px"}} type="email" name="user_email" placeholder='email' /> <br />
           <input  style={{padding:"10px",width:"100%",margin:"10px"}} type="text" name="user_sub" placeholder='subject' /> <br />
            <textarea  style={{padding:"10px",width:"100%",margin:"10px"}} name="message" placeholder='message' />  
          
            <input style={{margin:"10px",marginTop:"20px",backgroundColor:"orangered",color:"white", width:"30%", padding:"9px",}} type="submit" value="Send" placeholder="Acquista ora" />
                   
                   
            </form>
          
               <div>{result ? <Result /> : null}</div>  
             
        
    
           
               
             </Grid>

         </Grid> 
     </Container>
    </>
  )
}

export default Contact
