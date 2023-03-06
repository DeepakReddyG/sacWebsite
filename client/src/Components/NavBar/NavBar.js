import React from 'react'; 
import { Link } from 'react-router-dom';


import './NavBar.css'; 


const NavBar = () => {
  return (
    <div className='NavBarComponent'>
        <div className="NavBarContainer">
            <div className="logo">
                <h3>KLEF Student Activity Center</h3>
            </div>
            <div className="index">
                <ul>
                    <li><Link className='links'>Wings</Link></li>
                    <li><Link className='links'>Wings</Link></li>
                    <li><Link className='links'>Wings</Link></li>
                    <li><Link className='links'>Wings</Link></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default NavBar
