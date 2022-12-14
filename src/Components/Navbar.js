import React from 'react';
import "./Navbar.css";
import { Hidden } from '@mui/material';
import { NavLink } from 'react-router-dom';





function Navbar() {
  
  return (
    <>
    <div className='container'>
        <div className='row'>
            <div className='col'>
                <div className='main-menu'>
                    <div className='menu-left'>
                        <div className='navbar'>
                            <div className='brand-logo'>
                            <img  src={process.env.PUBLIC_URL + '/Orlo Couturepng.png'} alt='' />

                            </div>

                        </div>

                    </div>
                    <div>
                        <Hidden lgDown>
                    <form>
          <input style={{ backgroundColor:"#fff",
    padding:"12px",
    width:"350px",
    border:"2px solid #ff4c3b",
    outline:'none',
    borderRadius:" 0px",
    marginLeft: "50px",
    position: 'relative',}} type="text" placeholder='Search..'  />
           <button style={{ backgroundColor:"#ff4c3b",padding:"14px",color:"#fff", border:"1px solid white",cursor:"pointer",borderTopRightRadius:"0px",borderBottomRightRadius:"0px",}}>Search </button>
           </form>
           </Hidden>
     
        </div>
                    <div className='menu-right pull-right'>
                        <div>
                            <div className='main-navbar'>
                                <ul className='nav-menu'>
                                  <li  ><NavLink className="link" style={{textDecoration:"none"}} to='/home'>Home</NavLink></li>
                                    <li  ><NavLink className="link" to='/shop'>Negozio</NavLink> </li>
                                    <li  ><NavLink className="link" to='/about'>Chi siamo</NavLink> </li>
                                    <li  ><NavLink className="link" to='/contact'>Contatti</NavLink> </li>
                                    {/* <li ><NavLink className="link" to='/signin'>Signin</NavLink> </li>
                                    <li ><NavLink className="link" to='/signup'>Signup</NavLink> </li> */}
                                    

                                </ul>

                            </div>
                        </div>

                    </div>

                </div>

            </div>

        </div>

    </div>
      
    </>
  )
}

export default Navbar
