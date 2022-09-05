import React,{useState} from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Typography from '@mui/material/Typography';

import Container from '@mui/material/Container';
import axios from "axios";
import Header from "./Header";
import "./Men.css";
import { useNavigate } from 'react-router-dom';

export default function SignIn() {
  const Navigate = useNavigate();
  const [userdata, setuserdata] = useState({
    email:"",
    password:""
  })
  const [msg,setmsg] = useState('');

  var changedata=(e)=>{
    setuserdata({...userdata,[e.target.name]:e.target.value})
  }



  var submit=(e)=>{
    e.preventDefault()
    axios.post("https://fivrr1.herokuapp.com/signin",userdata).then((res) => {setmsg(res.data);console.log(res.data)}).then((err)=>{console.log(err)})
    // console.log(userdata);
    console.log(msg.msg);
    // Navigate("/product");

     if(msg.msg === "log In Successful"){
       alert("Login Successfully");
      Navigate("/product");
     }else{
       alert("Inavlid email or password");
     }

    
  }

  return (
    <>
    <Header />
  <div className='background_pic'>
  

          
       
  <h3>SignIn</h3>
  <h3>Home / SignIn</h3>
  </div>
    <div style={{background:"#fff"}}>
    <Container    maxWidth="xs">
      <div style={{ marginTop:"30px",display:'flex',flexDirection:'column',alignItems:'center',}}>
        <Avatar style={{margin:"10px", backgroundColor: "orangered",}}>
        <AccountCircleIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form style={{   width: '100%', marginTop:"25px",}} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            value={userdata.email}
            onChange={changedata}
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            value={userdata.password}
            onChange={changedata}
            label="password"
            type="Password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button style={{marginTop:"20px",backgroundColor:"orangered",marginBottom:"5px"}}
            type="submit"
            fullWidth
            onClick={submit}
            variant="contained"
            color="primary"
            >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        
      </Box>
    </Container>
    </div>
    </>
  );
}