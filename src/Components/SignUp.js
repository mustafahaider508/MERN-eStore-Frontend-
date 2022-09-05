import React ,{useState} from'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/material/styles';
import Container from '@mui/material/Container';
import axios from "axios"
import {Link} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  paper: {
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
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUp() {


  const [userdata, setuserdata] = useState({
    username:"",
    email:"",
    password:""
  })

  var changedata=(e)=>{
    setuserdata({...userdata,[e.target.name]:e.target.value})
  }
  const classes = useStyles();


  var submit=(e)=>{
    e.preventDefault()
    axios.post("https://fivrr1.herokuapp.com/userregistration",userdata).then((res)=>{console.log(res.data)}).then((err)=>{console.log(err)})
    console.log(userdata);
   

    
    

    
  }
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <AccountCircleIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} >
              <TextField
                autoComplete="fname"
                name="username"
                variant="outlined"
                required
                onChange={changedata}
                value={userdata.username}
                fullWidth
                id="username"
                label="username"
                autoFocus
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                onChange={changedata}
                value={userdata.email}
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                onChange={changedata}
                required
                fullWidth
                value={userdata.password}
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </Grid>
  
          </Grid>
          <Link to='/signin'>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            onClick={submit}
            className={classes.submit}
          >
            Sign Up
          </Button>
          </Link>
          
          <Grid container justifyContent="flex-end">
            <Grid item>
           
                Already have an account? Sign in
       
            </Grid>
          </Grid>
        </form>
      </div>
      
    </Container>
  );
}