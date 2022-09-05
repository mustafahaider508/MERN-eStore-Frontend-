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
        category:"",
        subcategory:"",
        title:"",
        price:"",
        discription:"",
})

const [file, setfile] = React.useState()


  var changedata=(e)=>{
    setproducts({...products,[e.target.name]:e.target.value})
  }

  var submit=(e)=>{
    e.preventDefault()
    const data=new FormData();
// data.append("products",JSON.stringify(products))
data.append("productimage",file)
for(const key in products){
     data.append(key,products[key])
}
// data.append("key","value")
console.log('Client',products);

    axios.post("https://fivrr1.herokuapp.com/products",data)
    .then((res)=>{console.log(res.data)}).then((err)=>{console.log(err)})

    alert("Product Added Successfully");
    setproducts({
      category:"",
        subcategory:"",
        title:"",
        price:"",
        discription:"",
    });  
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
    <img src="Orlo Couturepng.png" alt=''/>
    <h5>Fashion store</h5>
    <h6>750 followers | 10 review</h6>
   <h6>Info@orlocouture.com</h6>
   </div>
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
          value={products.category}
          label="catagory"
          name="category"
          onChange={changedata}
        >
          <MenuItem value={"men"}>Men</MenuItem>
          <MenuItem value={"women"}>Women</MenuItem>
        </Select>
      </FormControl>

            </Grid>

            <Grid item lg={6}>
            <FormControl fullWidth sx={{ m: 1 }}>
        <InputLabel id="demo-simple-select-label">Select SubCatagory</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={products.subcategory}
          name="subcategory"
          label="Age"
          onChange={changedata}
        >
          <MenuItem value={"Abbigliamento"}>Abbigliamento</MenuItem>
          <MenuItem value={"Vintage"}>Vintage</MenuItem>
          <MenuItem value={"Customized"}>Customized</MenuItem>
          <MenuItem value={"Accessories"}>Accessories</MenuItem>
          <MenuItem value={"Braccialieanelli"}>Braccialieanelli</MenuItem> 
          <MenuItem value={"Collaneeorecchini"}>Collaneeorecchini</MenuItem>


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
            <TextField onChange={changedata} value={products.discription} name="discription" id="outlined-multiline-static" label="Description"  rows={3} />
            
            </FormControl>
   
            </Grid>
            <Grid item lg={6}>
            <FormControl fullWidth sx={{ m: 1 }}>           
            <input   onChange={(e)=>{
          const file=e.target.files[0]
          setfile(file)
          console.log(file)
        }}
         value={products.productimage} type="file" name="productimage"   accept="image/*" />
             </FormControl>
            </Grid>
            <Grid item lg={6}>
           
            
            <button  onClick={submit} style={{float:'right',border:"none",padding:"10px",width:"200px",backgroundColor:"orangered",color:"white"}}>Add Product</button>
               
            </Grid>

        </Grid>
        </Container>
    </Grid>
    

    

</Grid>
</Container>



     
   
    </>
  );
}

;