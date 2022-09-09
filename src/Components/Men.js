import { Grid,Container } from '@mui/material';
import React ,{useState,useEffect}from 'react'
import Header from './Header'
import "./Men.css";
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActionArea from '@mui/material/CardActionArea';
import Typography from '@mui/material/Typography';
 import Rating from '@mui/material/Rating';
import { NavLink,Link } from 'react-router-dom';
import  API from './Api.js';



function Men() {
  const[ProductData,SetProductData] = useState([]);
  const [value] = React.useState(4);

   
  useEffect(() =>{
    fetch(`${API}/getproduct`)
    .then((response) => response.json())
    .then((data) => {
    // console.log(data);   
       SetProductData(data);

    
    })
  },[]);

  return (
    <div>
      <Header />
     
      

        <Container style={{marginTop:"30px"}} maxWidth="lg">

       
          <Grid  >
             
              <Grid  item xs={12} md={6} lg={12}> 


              <Grid container  spacing={4} >
               
                <Grid item  xs={12}   lg={6}>
                  <NavLink  style={{textDecoration:"none",color:"black"}} to="/abbigliamento">
                <Card    sx={{maxWidth:440}}  style={{height:"50vh",borderRadius:"10px"}} >
                <img  style={{width:"100%",height:"50vh"}} src="men_ab.jpeg" alt='' />

                </Card>
                <p style={{width:"440px",backgroundColor:"#9c1003",color:"white",fontSize: "25px",
              fontFamily: "Georgia, 'Times New Roman', Times, serif",textAlign:"center",textTransform:"capitalized" }}>ABBIGLIAMENTO</p>
                </NavLink>
               
                </Grid>
                <Grid item xs={12} lg={6}>
                <NavLink   style={{textDecoration:"none",color:"black"}} to="/men_Accessories">
                <Card sx={{maxWidth:440}}    style={{height:"50vh",borderRadius:"10px"}} >
                <img style={{width:"100%",height:"50vh"}} src="WhatsApp Image 2022-09-05 at 5.09.36 AM.jpeg" alt='' />

                </Card>
                <p style={{width:"440px",backgroundColor:"#9c1003",color:"white",fontSize: "25px",
               fontFamily: "Georgia, 'Times New Roman', Times, serif",textAlign:"center" }}>ACCESSORI</p>
                 </NavLink>
                </Grid>
               
              </Grid>
                
                
                
              <Grid container spacing={2}>
        {ProductData.filter((i)=>i.category==="men").map(i => {
          return (
            <>
            
            <Grid item xs={6} md={6} lg={3} >
            <Link style={{textDecoration:"none"}} to={`/product_detail/${i._id}`}>
          <Card variant="outlined" sx={{ maxWidth: 325 }} style={{border:"none"}}>
        <CardActionArea>
          <CardMedia style={{height:"60vh"}} image={i.productimage} />
          
          <CardContent>
      <Rating style={{fontSize:"20px"}} name="read-only" value={value} readOnly />
            <Typography style={{ texAlign: "center", fontWeight: 400, fontSize: "13px", fontFamily: "Open Sans,sans-serif",lineHeight: 1.7, opacity: 0.8,  textTransform: "uppercase",textOverflow: "ellipsis", overflow: "hidden",whiteSpace: "nowrap",}} variant="body1"  color="textSecondary"  component="p">
            {i.cat}
            </Typography>
            <Typography style={{maxWidth: "100%",fontWeight: 500,fontSize: "17px", fontFamily:"Open Sans,sans-serif", lineHeight: 1.35,letterSpacing: "0.005em", marginBottom:"0.4rem", textOverflow: "ellipsis", overflow: "hidden",}} variant="body1" component="p">
             {i.title}
            </Typography>
            <Typography style={{ fontWeight: 600,fontSize: "17px", fontSamily: "Poppins,sans-serif",lineHeight: 1.35,  letterSpacing: "0.005em", marginBottom:"0.4rem", textOverflow: "ellipsis", overflow: "hidden",}} variant="h6" component="p">
            €{i.price}.00
            </Typography>
          </CardContent>
        </CardActionArea>
        
      </Card>
</Link>
          </Grid>
         
            
            </>
          )
        })}
        
 
      </Grid>

                
         
             


              </Grid>

              
          

          </Grid>
          </Container>

         
        
      </div>

    
  )
}

export default Men
