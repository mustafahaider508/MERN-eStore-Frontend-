import { Grid ,Hidden} from '@mui/material';
import React from 'react';
import { Link } from "react-router-dom";
import Mob_banner from '../Mob_banner';
import './BackgroundPic.css';


function BackgroundPic() {
  return (
    <>
    <Hidden smDown>
    <Link to="/home">
      <Grid container>
        <Grid item xs={12} md={12} lg={12}>
        <div style={{backgroundImage:"url('/Site_Banner.png')",backgroundSize:"cover",height:"131.5vh",position:"relative",backgroundPosition:"50%",marginTop:"-230px"}}>
</div>
        </Grid>
      </Grid>
   
     </Link>
     </Hidden>

     <Hidden smUp>
     <Mob_banner />
     </Hidden>

    
      
    </>
  )
}

export default BackgroundPic
