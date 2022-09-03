import { Grid } from '@mui/material';
import React,{useState,useEffect} from 'react';
import "./Product_Cart.css";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import axios from 'axios';
import { Link } from 'react-router-dom';



function Product_Card() {
  const [value, setValue] = React.useState(4);
  const[Data,setData] = useState([]);


  useEffect(()=>{
    axios.get("https://fivrr1.herokuapp.com/getproduct")
    .then((res)=>{setData(res.data);
    console.log(res.data)})
},[])  

 
  console.log(Data.title);

  return (
    <>
      <div style={{marginTop:"50px"}} className='container'>

     
      <Grid container spacing={2}>
        {Data.slice(0,4).map(i => {
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
            {i.category}
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
      </Link>
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
