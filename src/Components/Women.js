import { Grid,Container } from '@mui/material';
import React,{useState,useEffect} from 'react'
import Header from './Header'
import "./Men.css";
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import CardActionArea from '@mui/material/CardActionArea';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Rating from '@mui/material/Rating';
import Slider from '@mui/material/Slider';
import { Link, NavLink } from 'react-router-dom';
import  API from './Api.js';



const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));

  function valuetext(valuee) {
    return `${valuee}°C`;
  }

  const marks = [
    {
      value: 0,
      label: '0',
    },
    
    {
      value: 100,
      label: '100',
    },
  ];
  

function Women() {
  const[ProductData,SetProductData] = useState([]);
    const [expanded, setExpanded] = React.useState(false);
    const [expanded1, setExpanded1] = React.useState(false);
    const [expanded2, setExpanded2] = React.useState(false);
    const [expanded3, setExpanded3] = React.useState(false);
    const [value] = React.useState(4);

  const handleExpandClick = () => {
    setExpanded(!expanded);
   
  };
  const handleExpandClick1 = () => {
    setExpanded1(!expanded1);
  };
  const handleExpandClick2 = () => {
    setExpanded2(!expanded2);
  };
  const handleExpandClick3 = () => {
    setExpanded3(!expanded3);
  };

  const [valuee, setValuee] = React.useState([0, 1000]);

  const handleChange = (event, newValue) => {
    setValuee(newValue);
  };

  useEffect(() =>{
    fetch(`${API}/getproduct`)
    .then((response) => response.json())
    .then((data) => {
      SetProductData(data);


     
    
    })
  },[]);

  console.log(ProductData);

  return (
    <div>
      <Header />
     
      <div className='background_pic'>
  

          
       
          <h3>Women Collection</h3>
          <h3>Home / Women Collection</h3>
          </div>

        <Container style={{marginTop:"30px"}} maxWidth="xl">

       
          <Grid container>
              <Grid item xs={12} md={6} lg={3}> 
                
              <Card variant='outlined' sx={{ maxWidth: 300 }}>
   
              <Typography style={{padding:"10px",fontSize:"20px",fontWeight:"600"}}>Catagories</Typography>
      <CardActions disableSpacing>
      
        <Typography style={{fontWeight:"600"}}>UOMO</Typography>
       
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography style={{textTransform:"lowercase"}} >ABBIGLIAMENTO</Typography>
          <Typography style={{textTransform:"lowercase"}} >VINTAGE</Typography>
          <Typography style={{textTransform:"lowercase"}}>CUSTOMIZED</Typography>
          

        </CardContent>
      </Collapse>
      <CardActions disableSpacing>
      
      <Typography style={{fontWeight:"600"}}>ACCESSORI</Typography>
     
      <ExpandMore
        expand={expanded1}
        onClick={handleExpandClick1}
        aria-expanded={expanded1}
        aria-label="show more"
      >
        <ExpandMoreIcon />
      </ExpandMore>
    </CardActions>
    <Collapse in={expanded1} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography style={{textTransform:"lowercase"}} >VINTAGE</Typography>
          <Typography  style={{textTransform:"lowercase"}}>BRACCIALI E ANELLI</Typography>
          <Typography  style={{textTransform:"lowercase"}}>COLLANE E ORECCHINI</Typography>
          

        </CardContent>
      </Collapse>
      <CardActions disableSpacing>
      
      <Typography style={{fontWeight:"600"}}>DONNA</Typography>
     
      <ExpandMore
        expand={expanded2}
        onClick={handleExpandClick2}
        aria-expanded={expanded2}
        aria-label="show more"
      >
        <ExpandMoreIcon />
      </ExpandMore>
    </CardActions>
    <Collapse in={expanded2} timeout="auto" unmountOnExit>
        <CardContent>
        <Typography style={{textTransform:"lowercase"}} >ABBIGLIAMENTO</Typography>
          <Typography style={{textTransform:"lowercase"}} >VINTAGE</Typography>
          <Typography  style={{textTransform:"lowercase"}}>CUSTOMIZED</Typography>
          

        </CardContent>
      </Collapse>
      <CardActions disableSpacing>
      
      <Typography style={{fontWeight:"600"}}>ACCESSORI</Typography>
     
      <ExpandMore
        expand={expanded3}
        onClick={handleExpandClick3}
        aria-expanded={expanded3}
        aria-label="show more"
      >
        <ExpandMoreIcon />
      </ExpandMore>
    </CardActions>
    <Collapse in={expanded3} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography style={{textTransform:"lowercase"}} >VINTAGE</Typography>
          <Typography style={{textTransform:"lowercase"}} >BRACCIALI E ANELLI</Typography>
          <Typography  style={{textTransform:"lowercase"}}>COLLANE E ORECCHINI</Typography>
          

        </CardContent>
      </Collapse>
      <CardActions disableSpacing>
      
      <Typography style={{fontWeight:"600"}}>Price</Typography>
     
      <ExpandMore
       
      >
        <ExpandMoreIcon />
      </ExpandMore>
    </CardActions>

        <CardContent>
        <Slider style={{color:"orangered"}}
        getAriaLabel={() => 'Temperature range'}
        value={valuee}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        marks={marks}
      />
          

        </CardContent>
     

    </Card>
    <Typography style={{padding:"10px",fontWeight:600}}>TOP RATED PRODUCTS</Typography>

    {ProductData.filter((i)=>i.category=="women").slice(0,2).map(i => {
      return (
        <>
        <Link style={{textDecoration:"none"}} to={`/product_detail/${i._id}`}>
        <div style={{display:"flex",alignItems:"center", paddingBottom:"10px"}} >
            <img style={{width:"100px",padding:0,margin:0}} src={i.productimage} />
            <div style={{paddingLeft:"0px"}}>
                <Rating style={{fontSize:"20px"}} name="read-only" value={value} readOnly  />
                <p style={{color:"grey",lineHeight:"1"}}>{i.title}</p>
                <p style={{fontWeight:600,lineHeight:"0",color:"black"}}>{i.price}</p>
            </div>
        </div>
        </Link>
      
        </>
      )
    })}
      
    
              </Grid>
              <Grid item xs={12} md={6} lg={9}> 

              <Grid container>
              <Grid item  xs={12} lg={6}>
                  <NavLink style={{textDecoration:"none",color:"black"}} to="/w_clothing">
                <Card    style={{height:"40vh",borderRadius:"10px"}} sx={{ maxWidth: 400 }}>
                <img style={{width:"100%",height:"50vh"}} src="https://okcredit-blog-images-prod.storage.googleapis.com/2021/04/Clothing-Store1--1-.jpg" />

                </Card>
                <p style={{backgroundColor:"#eee",width:"400px",fontSize: "25px",
              fontFamily: "Georgia, 'Times New Roman', Times, serif",textAlign:"center",textTransform:"uppercase" }}>abbigliamento</p>
                </NavLink>
               
                </Grid>
                <Grid item xs={12} lg={6}>
                <NavLink style={{textDecoration:"none",color:"black"}} to="/w_accessories">
                <Card    style={{height:"40vh",borderRadius:"10px"}} sx={{ maxWidth: 400 }}>
                <img style={{width:"100%",height:"50vh"}} src="https://media.istockphoto.com/photos/polka-dot-summer-brown-dress-suede-wedge-sandals-eco-straw-tote-bag-picture-id1208148708?k=20&m=1208148708&s=612x612&w=0&h=rjZiAPCOpwREiTET21lTP3wM30BUqAG9PjocC-euJ98=" />

                </Card>
                <p style={{backgroundColor:"#eee",width:"400px",fontSize: "25px",
               fontFamily: "Georgia, 'Times New Roman', Times, serif",textAlign:"center" }}>ACCESSORI</p>
                 </NavLink>
                </Grid>

              </Grid>

             
                
                
              <Grid container spacing={2}>
        {ProductData.filter((i)=>i.category=="women").map(i => {
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

                
         
             


              </Grid>

              
          

          </Grid>
          </Container>

         
        
      </div>

    
  )
}

export default Women
