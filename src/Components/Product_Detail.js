import React,{useState,useEffect} from 'react';
import {Grid,Typography,Container,Card,CardMedia,Divider,CardActionArea,CardContent} from "@mui/material";
import Rating from '@mui/material/Rating';
import API from "./Api"
import "./Men.css"
import { useParams } from 'react-router-dom';
import ReactWhatsapp from 'react-whatsapp';
import Header from './Header';



function ProductDetail() {
  const[ProductData,SetProductData] = useState([]);
  const [filterdata, Setfilterdata] = useState([]);
  const [value] = React.useState(4);
  const proid = useParams();


  useEffect( () =>{
    fetch(`${API}/getproduct`)
     .then((response) => response.json())
     .then((data) => {
      console.log(data);

       SetProductData(data.filter(x => x._id === proid.id));
        Setfilterdata(data);
        // console.log(filterdata);
     
    
 
       
     

 
      

     
     })
   },[proid]);

   var apidata=filterdata.filter(x1 => x1.category === ProductData[0].category && x1.subcategory===ProductData[0].subcategory );
    // console.log(apidata.length)
var arr=apidata.length-5;
var randomdata=Math.floor(Math.random()*arr);



  return (
    <div>
      <Header />
   
      <Container style={{marginTop:"15px"}}>
      <Grid container >
      {ProductData.map(i => {
          return (
            <>
          <Grid xs={12} lg={6}> 
          <Card variant='outlined' style={{ maxWidth: 570}}>

        <CardMedia 
         style={{height:"100vh",padding:0,margin:0}}
          component="img"
          alt="Contemplative Reptile"
          image={i.productimage}
          title=""
        />
        
    </Card>
         </Grid>
         
         <Grid xs={12} md={6} lg={6}>
                 <div style={{marginLeft:"20px"}}>
                <Typography  varient="p" style={{color: "#222529",fontSize: "2.4rem",fontWeight: 600,letterSpacing: "0rem",}} >{i.title}</Typography>
                <Typography  varient="body1" style={{backgroundColor:"green",fontSize:"12px", color:"white",width:"15%",textAlign:"center",borderRadius:"12px",padding:"4px",}}>available</Typography>
                <Divider style={{width:"20%",background:"#e7e7e7",border:"1px solid ", marginTop:"15px",}} />

                 <Typography  varient="body1" style={{marginTop:"25px",color: "#222529", fontSize: "1.5rem",fontWeight:600,verticalAlign: "middle",lineHeight: ".8",}}>€{i.price}.00</Typography>
                 <Typography  varient="body1" style={{marginTop:"25px",color: "#222529", fontSize: "1rem",fontWeight:600,verticalAlign: "middle",lineHeight: ".8",}}>Descrizione del prodotto</Typography>
                 <Typography  varient="body1" style={{color:"#777",marginTop:"20px",fontSize: "1.1rem",}}>{i.discription}</Typography>
                 <div style={{  display:"flex",marginTop:"30px",}}> 
                 <Typography style={{fontSize:"15px", color:"#777",textTransform:"uppercase",}}>categoria:</Typography>
                 <Typography style={{fontSize:"15px",fontWeight:700,paddingLeft:"10px",textTransform:"uppercase",}}>{i.category}</Typography>
                 </div>
                
                 <div style={{marginTop:"20px",}}>
                 <Divider  />
                 <Divider />
                 </div>
                 <ReactWhatsapp style={{marginTop:"20px",backgroundColor:"orangered",color:"white", width:"30%", padding:"9px",}} number="+393664275077" message={`Hey! I want to buy +${i.productimage} Title=${i.title} Price=${i.price}`} >
                 Acquista ora
                 </ReactWhatsapp>
               
                
             
                 <div style={{display:"flex",marginTop:"10px",}}>
                 <Divider  />
                 <Divider />
                 </div>


                </div>

             </Grid>
             </>
             )})}
      </Grid>
      </Container>

      <Container>
      <div style={{marginTop:"20px"}}>
         <Typography style={{ marginTop:"50px",fontSize:"1.2rem",fontWeight:700,textTransform:"uppercase",}} variant="p">
prodotti correlati</Typography>

      
         
         <div>
                 <Divider  />
                 <Divider />
                 </div>

                  <Container style={{padding:"40px"}}>

                 <Grid container spacing={2}>
        {apidata.slice(randomdata,randomdata+4).map(i => {
          return (
            <>
            
            <Grid item xs={6} md={6} lg={3} >
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

export default ProductDetail
