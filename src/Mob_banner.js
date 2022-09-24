import React from 'react';
import { Grid } from '@mui/material';
import { Link } from "react-router-dom";


function MobBanner() {
  return (
    <>
   <Link to="/home">
      <Grid container>
        <Grid item xs={12} md={12} lg={12}>
        <div style={{backgroundImage:"url('/Site_Banner_Mob.png')",backgroundSize:"cover",height:"100vh",position:"relative",backgroundPosition:"50%",marginTop:"0px"}}>
</div>
        </Grid>
      </Grid>
   
     </Link>
    </>
  )
}

export default MobBanner
