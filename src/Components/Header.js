import React from 'react';
import "./Header.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faHeart, faPhone, faUser } from '@fortawesome/free-solid-svg-icons'
import Dummy from '../Dummy';
import Navbar from './Navbar';
import Hidden from '@mui/material/Hidden';
import Mobnav from './Mobnav';






function Header() {
 
    
  return (
    <>

    <Hidden smUp>
        <Mobnav />

    </Hidden>
   
   <Hidden smDown >
    <div className='top-header'>
        <div  className='container'>
            <div className='row'>
                <div className='col-lg-6'>
                    <div className='header-content'>
                        <ul>
                            <li>Benvenuto a 0rloCouture</li>
                            
                          
                        </ul>

                    </div>
                    </div>
                    <div className='text-right col-lg-6'>
                        <ul className='header-dropdown'>
                            <li className='mobile-wishlist'><FontAwesomeIcon  className='icon' icon={faHeart} /> wishlist</li>
                            <li className='onhover-dropdown mobile-account'>
                                <span style={{display:"flex",alignItems:"center"}}>
                                <FontAwesomeIcon className='icon' icon={faUser} />
                                <Dummy />
                                </span>
                      
                           
                                  </li>
                                 </ul>
                              </div>
                           </div>
                         </div>
                     </div>
                    
                 
                         <Navbar />
                     
                         </Hidden>
 
  
   
      
    </>
  )
}

export default Header
