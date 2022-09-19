import React from 'react';
import { Link } from "react-router-dom";


function BackgroundPic() {
  return (
    <>
    <Link to="/home">
    <div style={{backgroundImage:"url('/Site_Banner.png')",backgroundSize:"cover",height:"131.5vh",position:"relative",backgroundPosition:"50%",marginTop:"-230px"}}>
</div>
     </Link>
      
    </>
  )
}

export default BackgroundPic
