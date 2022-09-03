import react,{useEffect,useState} from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { NavLink } from 'react-router-dom';
import "./Men.css";
import "./Dashboard.css"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';


  

export default function Veiw_products() {
 
const [data, setdata] = useState([])
  useEffect(()=>{
        axios.get("https://fivrr1.herokuapp.com/getproduct").then((res)=>{setdata(res.data);console.log(res.data)})
  },[data])  


  const deletee=(id)=>{
    console.log(id)
          axios.post(`https://fivrr1.herokuapp.com/delete/${id}`).then((res)=>{console.log(res.data)})
 
        } 

  return (
      <>

<div className='background_pic'>
  

        
       
  <h3>View Products </h3>
  <h3>Shop / View Products</h3>
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
          <TableContainer variant='outlined' component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">id</TableCell>
            <TableCell align="left">Productimage</TableCell>
            <TableCell align="left">Catagory</TableCell>
            <TableCell align="left">Subcatagory</TableCell>
            <TableCell align="left">Title</TableCell>
            <TableCell align="left">Price</TableCell>
            <TableCell align="left"> Description</TableCell>
            <TableCell align="left"> Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
       {
        data.map((i)=>{

          return(
          <TableRow>
           
          <TableCell align="left">{i._id}</TableCell>
          <TableCell align="left">{i.productimage}</TableCell>
          <TableCell align="left">{i.category}</TableCell>
          <TableCell align="left">{i.subcategory}</TableCell>
          <TableCell align="left">{i.title}</TableCell>
          <TableCell align="left">{i.price}</TableCell>
          <TableCell align="left">{i.discription}</TableCell>
          <TableCell align="left">
              <EditIcon style={{color:"blue",marginRight:"10px",cursor:"pointer"}} />
              <DeleteIcon onClick={()=>{deletee(i._id)}}  style={{color:"red",cursor:"pointer"}}/>

          </TableCell>
          
        </TableRow>

) })
       }
            
        
        </TableBody>
      </Table>
    </TableContainer>
    </Container>
          </Grid>

      </Grid>
      </Container>
   
    </>
  );
}

