import { Grid } from '@mui/material';
import React from 'react';
import "./Product_Cart.css";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import { Container } from '@mui/system';

const products = [
  {
    img:"https://multikart-react.vercel.app/assets/images/pro3/4.jpg",
    cat:"women",
    title:"Crop top",
    price:"$50.00"
  },
  {
    img:"https://multikart-react.vercel.app/assets/images/pro3/39.jpg",
    cat:"women",
    title:"trim Dress",
    price:"5394.00"
  },
  {
    img:"https://multikart-react.vercel.app/assets/images/pro3/3.jpg",
    cat:"women",
    title:"belted Dress",
    price:"6882.00",
  },
  {
    img:"https://multikart-react.vercel.app/assets/images/pro3/1.jpg",
    cat:"women",
    title:"fitted dress",
    price:"6473.00",
  }
  
  

]

function Product_Card() {
  const [value, setValue] = React.useState(4);
  return (
    <>
      <div style={{marginTop:"50px"}} className='container'>

     
      <Grid container spacing={2}>
        {products.map(i => {
          return (
            <>
            
            <Grid item xs={12} md={6} lg={3} >
          <Card variant="outlined" sx={{ maxWidth: 325 }} style={{border:"none"}}>
        <CardActionArea>
          <CardMedia style={{height:"60vh"}} image={i.img} />
          
          <CardContent>
      <Rating style={{fontSize:"20px"}} name="read-only" value={value} readOnly />
            <Typography style={{ texAlign: "center", fontWeight: 400, fontSize: "13px", fontFamily: "Open Sans,sans-serif",lineHeight: 1.7, opacity: 0.8,  textTransform: "uppercase",textOverflow: "ellipsis", overflow: "hidden",whiteSpace: "nowrap",}} variant="body1"  color="textSecondary"  component="p">
            {i.cat}
            </Typography>
            <Typography style={{maxWidth: "100%",fontWeight: 500,fontSize: "17px", fontFamily:"Open Sans,sans-serif", lineHeight: 1.35,letterSpacing: "0.005em", marginBottom:"0.4rem", textOverflow: "ellipsis", overflow: "hidden",}} variant="body1" component="p">
             {i.title}
            </Typography>
            <Typography style={{ fontWeight: 600,fontSize: "17px", fontSamily: "Poppins,sans-serif",lineHeight: 1.35,  letterSpacing: "0.005em", marginBottom:"0.4rem", textOverflow: "ellipsis", overflow: "hidden",}} variant="h6" component="p">
             {i.price}
            </Typography>
          </CardContent>
        </CardActionArea>
        
      </Card>

          </Grid>
         
            
            </>
          )
        })}
        

      </Grid>
      </div>
    </>
  )
}

export default Product_Card
