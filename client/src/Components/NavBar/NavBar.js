import React from 'react'; 
import { Link } from 'react-router-dom';


import './NavBar.css'; 

import sac_logo from '../../Assets/Images/sac_logo.png'; 

const NavBar = () => {
  return (
    <div className='NavBarComponent'>
        <div className="NavBarContainer">
            <div className="logo">
                <p>Koneru Lakshmaiah Education Foundation | Student Activity Center</p>
            </div>
        </div>
        <div className="NavBarTwo">
            <div className="NavBarTwo-one">
                <img src={sac_logo} alt="" />
            </div>
        </div>
        <div className="NavThree">
            <div className="NavThreeInner">
                <center>
                <ul>
                    <li><Link className='links'>Home</Link></li>
                    <li><Link className='links'>Wings</Link></li>
                    <li><Link className='links'>Technology</Link></li>
                    <li><Link className='links'>LiberalArts</Link></li>
                    <li><Link className='links'>SocialWings</Link></li>
                    <li><Link className='links'>Academics</Link></li>
                    <li><Link className='links'>Activities</Link></li>
                </ul>
                </center>
            </div>
        </div>
    </div>
  )
}

export default NavBar
