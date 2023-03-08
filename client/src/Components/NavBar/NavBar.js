import React from 'react'; 
import { Link } from 'react-router-dom';


import './NavBar.css'; 

import sac_logo from '../../Assets/Images/sac_logo.png'; 

const NavBar = () => {
  return (
    <div className='NavBarComponent'>
        <div className="NavBarContainer">
            <div className="logo">
                <p>Koneru Lakshmaiah Education Foundation | Student Activity Center </p>
            </div>
        </div>
        <div className="NavBarTwo">
            <div className="NavBarTwo-one">
                <img src={sac_logo} alt="" />
            </div>
            <div className="NavBarTwo-two">
                <h1>The Coding School</h1>
            </div>
            <div className="NavBarTwo-three search">
                <input type="text" placeholder='Search this site' />
            </div>
        </div>
        <div className="NavThree">
            <div className="NavThreeInner">
                <center>
                <ul>
                    <li><Link className='links'>Home</Link></li>
                    <li><Link className='links'>Leadership</Link></li>
                    <li><Link className='links'>Activities</Link></li>
                    <li><Link className='links'>Projects</Link></li>
                    <li><Link className='links'>About</Link></li>
                    <li><Link className='links'>Curriculum</Link></li>
                    <li><Link className='links'>Contact</Link></li>
                </ul>
                </center>
            </div>
        </div>
    </div>
  )
}

export default NavBar
