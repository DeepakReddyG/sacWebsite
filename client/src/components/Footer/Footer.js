import React from 'react';
import '../Footer/Footer.css'; 

const Footer = () => {
  return (
    <div className='FooterComponent'>   
        <div className="FooterContainer">
            <div className="FooterOne">

            </div>
            <hr />
            <div className="FooterTwo">
              <div className="FooterTwo-one">
                <h3>THE MISSION</h3>
                <h5>The mission of the MIT Sloan School of Management is to develop principled, innovative leaders who improve the world and to generate ideas that advance management practice.</h5>
              </div>
            </div>
            <hr />
            <div className="FooterThree">
              <div className="FooterThree-one">
                <span id='copyright'>
                  <i class="fa fa-copyright" aria-hidden="true"></i> <p>Koneru Lakshmaiah Education Foundation - Student Activity Center | Developed by Coding School</p>
                </span>
              </div>
              <div className="FooterThree-two">
                <span id='socialIcons'>
                <i class="fa fa-facebook" aria-hidden="true"></i>
                <i class="fa fa-instagram" aria-hidden="true"></i>
                <i class="fa fa-twitter" aria-hidden="true"></i>
                <i class="fa fa-youtube" aria-hidden="true"></i>
                <i class="fa fa-linkedin" aria-hidden="true"></i>
                </span>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Footer
