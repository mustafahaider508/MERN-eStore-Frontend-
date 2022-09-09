import { Grid,Container } from '@mui/material';
import React,{useState,useEffect} from 'react'
import Header from './Header'
import "./Men.css";
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActionArea from '@mui/material/CardActionArea';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import  API from './Api.js';
import { Link } from 'react-router-dom';



  

function MenBecklacesRings() {
  const[ProductData,SetProductData] = useState([]);
    const [value] = React.useState(4);

  useEffect(() =>{
    fetch(`${API}/getproduct`)
    .then((response) => response.json())
    .then((data) => {
    // console.log(data)     
       SetProductData(data);

    
    })
  },[]);

  return (
    <div>
      <Header />
     
     

        <Container style={{marginTop:"30px"}} maxWidth="xl">
  
              <Grid container spacing={2}>
        {ProductData.filter((i)=>i.category==="men" && i.subcategory==="Braccialieanelli").map(i => {
          return (
            <>
            
            <Grid item xs={12} md={6} lg={3} >
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

          </Container>

         
        
      </div>

    
  )
}

export default MenBecklacesRings
