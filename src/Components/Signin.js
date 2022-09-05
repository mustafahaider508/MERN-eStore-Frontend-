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
import { makeStyles } from '@mui/material/styles';
import Container from '@mui/material/Container';
import axios from "axios";
import Header from "./Header";
import "./Men.css";
import { useNavigate } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
  paper: {
    marginBottom:"40px",
    background:"#fff",
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', 
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn() {
  const Navigate = useNavigate();
  const [userdata, setuserdata] = useState({
    email:"",
    password:""
  })

  var changedata=(e)=>{
    setuserdata({...userdata,[e.target.name]:e.target.value})
  }
  const classes = useStyles();


  var submit=(e)=>{
    e.preventDefault()
    axios.post("https://fivrr1.herokuapp.com/signin",userdata).then((res)=>{console.log(res.data)}).then((err)=>{console.log(err)})
    console.log(userdata);
    Navigate("/product");
    // if(userdata.email === [...userdata].email){
    //   Navigate("/dashboard");
    // }else{
    //   console.log("error");
    // }

    
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
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
        <AccountCircleIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate>
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
          <Button style={{backgroundColor:"orangered"}}
            type="submit"
            fullWidth
            onClick={submit}
            variant="contained"
            color="primary"
            className={classes.submit}
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