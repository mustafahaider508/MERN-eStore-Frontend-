import React,{useState,useEffect} from 'react';
import {Grid,Typography,Container,Card,CardMedia,Divider,Button , Link,CardActionArea,CardContent} from "@material-ui/core";
import Rating from '@mui/material/Rating';
import API from "./Api"
import "./Men.css"


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
  },
  
  
  

]


function Product_Detail() {
  const[ProductData,SetProductData] = useState([]);
  const [filterdata, Setfilterdata] = useState([]);
  const [value, setValue] = React.useState(4);


  useEffect( () =>{
    fetch(`${API}/getproduct`)
     .then((response) => response.json())
     .then((data) => {
      console.log(data);



      //  SetProductData(data.filter(x => x._id == proid.id));
      //   Setfilterdata(data);
      //   console.log(filterdata);
     
    
 
       
     

 
      

     
     })
   },[]);

  return (
    <div>
      <div className='background_pic'>
  

          
       
  <h3>Product Details</h3>
  <h3>Home / Product Details</h3>
  </div>
      <Container style={{marginTop:"15px"}}>
      <Grid container>
          <Grid xs={12} lg={6}> 
          <Card variant='outlined' style={{ maxWidth: 570}}>

        <CardMedia 
         style={{height:"100vh"}}
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image="https://multikart-react.vercel.app/assets/images/pro3/25.jpg"
          title=""
        />
        
    </Card>
         </Grid>
         <Grid xs={12} md={6} lg={6}>
                 <div>
                <Typography  varient="p" style={{color: "#222529",fontSize: "2.4rem",fontWeight: 600,letterSpacing: "0rem",}} >TRIM DRESS</Typography>
                <Typography  varient="body1" style={{backgroundColor:"green",fontSize:"12px", color:"white",width:"15%",textAlign:"center",borderRadius:"12px",padding:"4px",}}>available</Typography>
                <Divider style={{width:"20%",background:"#e7e7e7",border:"1px solid ", marginTop:"15px",}} />

                 <Typography  varient="body1" style={{marginTop:"25px",color: "#222529", fontSize: "1.5rem",fontWeight:600,verticalAlign: "middle",lineHeight: ".8",}}>$87.00</Typography>
                 <Typography  varient="body1" style={{marginTop:"25px",color: "#222529", fontSize: "1rem",fontWeight:600,verticalAlign: "middle",lineHeight: ".8",}}>Product Description</Typography>
                 <Typography  varient="body1" style={{color:"#777",marginTop:"20px",fontSize: "1.1rem",}}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.</Typography>
                 <div style={{  display:"flex",marginTop:"30px",}}> 
                 <Typography style={{fontSize:"15px", color:"#777",textTransform:"uppercase",}}>Catagory :</Typography>
                 <Typography style={{fontSize:"15px",fontWeight:700,paddingLeft:"10px",textTransform:"uppercase",}}>women</Typography>
                 </div>
                
                 <div style={{marginTop:"20px",}}>
                 <Divider  />
                 <Divider />
                 </div>
                <Link  style={{textDecoration:"none"}} href="" target="_blank" >
                 <Button style={{marginTop:"20px",backgroundColor:"orangered",color:"white", width:"30%", padding:"9px",}} variant="contained">Buy Now</Button>
                 </Link>
                 <div style={{display:"flex",marginTop:"10px",}}>
                 <Divider  />
                 <Divider />
                 </div>


                </div>

             </Grid>
      </Grid>
      </Container>

      <Container>
      <div style={{marginTop:"20px"}}>
         <Typography style={{ marginTop:"50px",fontSize:"1.2rem",fontWeight:700,textTransform:"uppercase",}} variant="p">Related Products</Typography>

      
         
         <div>
                 <Divider  />
                 <Divider />
                 </div>

                 <Container style={{padding:"40px"}}>

                 <Grid container spacing={2}>
        {products.map(i => {
          return (
            <>
            
            <Grid item xs={6} md={6} lg={3} >
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





                 </Container>




                 </div>
      </Container>
      
    </div>
  )
}

export default Product_Detail