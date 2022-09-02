import React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
  import {Link} from "react-router-dom";
import "./App.css";

function Dummy() {
    const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
         <Button 
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        My account
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>
          <Link style={{textDecoration:"none",color:"black"}} to='/signin'>SignIn</Link> </MenuItem>
        <MenuItem onClick={handleClose}>
        <Link style={{textDecoration:"none",color:"black"}} to='/signup'>SignUp</Link> </MenuItem>
       
      </Menu>
      
    </div>
  )
}

export default Dummy
