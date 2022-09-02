import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { NavLink } from 'react-router-dom';
import "./Men.css";
import "./Dashboard.css"
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import axios from "axios";

export default function Product() {
    const [products,setproducts] = React.useState({
        catagory:"",
        subcatagory:"",
        title:"",
        price:"",
        description:"",
        productimage:"",
})

    const [catagory, setCatagory] = React.useState('');
    const [subcatagory, setSubcatagory] = React.useState('');

  const handleChange = (event) => {
    setCatagory(event.target.value);
  };
  const handleChange1 = (event) => {
    setSubcatagory(event.target.value);
  };

  var changedata=(e)=>{
    setproducts({...products,[e.target.name]:e.target.value})
  }

  var submit=(e)=>{
    e.preventDefault()
    axios.post("https://fivrr1.herokuapp.com/products",products)
    .then((res)=>{console.log(res.data)}).then((err)=>{console.log(err)})
    console.log(products);
    
  }

  return (
      <>
 

<div className='background_pic'>  
  <h3>Add Products </h3>
  <h3>Dashboard / Add Products</h3>
  </div>

  <Container style={{marginTop:"50px",marginBottom:"50px"}} maxWidth='xl'>


<Grid container>
    <Grid  item lg={3}>

    <Card style={{background:"#f8f8f8"}} variant='outlined' sx={{ maxWidth: 345 }}>
<CardContent>
    <div style={{paddingBottom:"30px"}}>
    <img src="logo.png" />
    <h5>Fashion store</h5>
    <h6>750 followers | 10 review</h6>
   <h6>mark.enderess@mail.com</h6>
   </div>
    <h4 style={{paddingTop:"10px"}}>
    <NavLink  className="link" to='/dashboard'>
     Dashboard
  </NavLink>
    </h4>
    <h4>
    <NavLink className="link" to='/product'>
      Products
  </NavLink>
    </h4>
    <h4>
    <NavLink className="link" to='/veiw_products'>
     view Products
  </NavLink>
    </h4>
 
 
  
  
</CardContent>

</Card>
    
    </Grid>

    <Grid item lg={9}>
    <Container>

        <Grid container spacing={3}>

            <Grid item lg={6}>
            <FormControl fullWidth sx={{ m: 1 }}>
        <InputLabel id="demo-simple-select-label">Select Catagory</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={catagory}
          label="catagory"
          onChange={handleChange}
        >
          <MenuItem value={10}>Men</MenuItem>
          <MenuItem value={20}>Women</MenuItem>
        </Select>
      </FormControl>

            </Grid>

            <Grid item lg={6}>
            <FormControl fullWidth sx={{ m: 1 }}>
        <InputLabel id="demo-simple-select-label">Select SubCatagory</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={subcatagory}
          label="Age"
          onChange={handleChange1}
        >
          <MenuItem value={10}>Abbigliamento</MenuItem>
          <MenuItem value={20}>Vintage</MenuItem>
          <MenuItem value={30}>Customized</MenuItem>
          <MenuItem value={40}>bracciali e anelli</MenuItem> 
          <MenuItem value={50}>collane e orecchini</MenuItem>


        </Select>
      </FormControl>

            </Grid>
        
            
            <Grid item lg={6}>
            <FormControl fullWidth sx={{ m: 1 }}>
            <TextField  onChange={changedata} value={products.title}  name="title" maxWidth="" id="standard-basic" label="Title" variant="outlined"/>
            
            </FormControl>
   
            </Grid>
            <Grid item lg={6}>
            <FormControl fullWidth sx={{ m: 1 }}>
            <TextField onChange={changedata} value={products.price} name="price" maxWidth="" id="standard-basic" label="Price" variant="outlined" />
            
            </FormControl>
   
            </Grid>
            <Grid item lg={12}>
            <FormControl fullWidth sx={{ m: 1 }}>
            <TextField onChange={changedata} value={products.description} name="description" id="outlined-multiline-static" label="Description" multiline rows={3} />
            
            </FormControl>
   
            </Grid>
            <Grid item lg={6}>
            <FormControl fullWidth sx={{ m: 1 }}>
            
            <input onChange={changedata} value={products.productimage} type="file" name="productimage"   accept="image/*" />
             </FormControl>
            </Grid>
            <Grid item lg={6}>
           
            
            <button  onClick={submit} style={{float:'right',border:"none",padding:"10px",width:"200px",backgroundColor:"orangered",color:"white"}}>Submit</button>
               
            </Grid>

        </Grid>
        </Container>
    </Grid>
    

    

</Grid>
</Container>



     
   
    </>
  );
}

