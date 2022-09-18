import { Container,Grid,FormControl,TextField,Button} from '@mui/material'
import React,{useState} from 'react'
import Header from './Header'
import "./Men.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLocationDot} from '@fortawesome/free-solid-svg-icons'
import ReactWhatsapp from 'react-whatsapp';

function Contact() {
    const [name,setname] = useState("");
    const [email,setemail] = useState("");
    const[sub,setsub] = useState("");
    const [mesg,setmesg] = useState("");

    const [allEntry,setnewEntry] = useState([]);

  const Submit = (e) => {
      e.preventDefault();
      const newEntry = {name:name,email:email,sub:sub,mesg:mesg};
      setnewEntry([...allEntry,newEntry]);
      alert("Submitted SuccessFully!");
      setname("");
      setemail("");
      setsub("");
      setmesg("");
  
  }



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
             <form >
         <input style={{padding:"10px",width:"100%",margin:"10px"}} value={name} onChange={e => setname(e.target.value)}  name="name" placeholder='name' /> <br />
           <input  style={{padding:"10px",width:"100%",margin:"10px"}} value={email} onChange={e => setemail(e.target.value)}   name="email" placeholder='email' /> <br />
           <input  style={{padding:"10px",width:"100%",margin:"10px"}} value={sub}  onChange={e => setsub(e.target.value)}   name="subject" placeholder='subject' /> <br />
         
            <input  style={{padding:"10px",width:"100%",margin:"10px"}} value={mesg} onChange={e => setmesg(e.target.value)}  name="message" placeholder='message' />  
          
            <Button onClick={Submit} style={{margin:"10px",marginTop:"20px",backgroundColor:"orangered",color:"white", width:"30%", padding:"9px",}} number="+393664275077"  >
                    Acquista ora
                    </Button> 
            </form>
          
                 
             
                  
    
           
               
             </Grid>

         </Grid> 
     </Container>
    </>
  )
}

export default Contact
