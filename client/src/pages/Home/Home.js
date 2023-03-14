import React from 'react';
import '../Home/Home.css'; 



import { Link } from 'react-router-dom';
import CountUp, {startAnimation} from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor'; 
import Slide from 'react-reveal/Slide';

import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

import ScrollToTop from "react-scroll-to-top"; 

import Footer from '../../components/Footer/Footer';




const Home  = () => {



  const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
  ))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
  }));
  
  const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
      expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
      {...props}
    />
  ))(({ theme }) => ({
    backgroundColor:
      theme.palette.mode === 'dark'
        ? 'rgba(255, 255, 255, .05)'
        : 'rgba(0, 0, 0, .03)',
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
      transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
      marginLeft: theme.spacing(1),
    },
  }));
  
  const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: '1px solid rgba(0, 0, 0, .125)',
  }));
  const [expanded, setExpanded] = React.useState('panel1');

    const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
    };





  return (
    <div className='HomeComponent'>
        <div className="HomeContainer">

        <ScrollToTop  smooth id='scrollToTop' component={<p style={{ color: "rgb(151, 0, 3)" }}>Back to top</p>}></ScrollToTop>

            {/* --------Events Section-------- */}
            <div className="events">
              <div className="events-heading">
                <h1>News at SAC</h1>
                <h3>Stories about people, research, and innovation across the center</h3>
              </div>
              <div className="events-inner">
                <div className="events-one">
                {/* <VisibilitySensor onChange={start} delayedCall>
                          <span ref={countUpRef} />
                        </VisibilitySensor> */}
                    <Slide left>
                      <div className="events-one-one">
                        <img src="https://i.ibb.co/D88QZbK/womenstanding.webp" alt="" />

                        <div className="events-one-one-desc">
                        <h3>Anne Lorem.</h3>
                        <h5>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis eum, laborum molestias cupiditate magni laboriosam expedita? Repellat, earum debitis! Quos.</h5>
                        </div>
                      </div>
                    </Slide>
                  
                  <Slide left delay={100}>
                    <div className="events-one-two">
                      <div className="events-one-two-one">
                        <img src="https://i.ibb.co/3B2gPNk/diving.jpg" alt="" />

                        <div className="events-one-two-one-desc">
                          <h3>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus, cum.</h3>
                        </div>
                      </div>
                      <div className="events-one-two-two">
                          <img src="https://i.ibb.co/3B2gPNk/diving.jpg" alt="" />

                        <div className="events-one-two-one-desc">
                          <h3>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus, cum.</h3>
                        </div>
                      </div>
                    </div>
                  </Slide>
                </div>
                <div className="events-two">
                    <Slide right delay={100}>
                      <div className="events-two-one">
                          <div className="events-two-one-one">
                              <img src="https://i.ibb.co/3B2gPNk/diving.jpg" alt="" />
                              <div className="events-two-one-one-desc">
                                <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, magni!</h3>
                              </div>
                          </div>
                        <div className="events-two-one-two">
                            <img src="https://i.ibb.co/3B2gPNk/diving.jpg" alt="" />
                            <div className="events-two-one-two-desc">
                              <h3>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum, impedit?</h3>
                            </div>
                        </div>
                      </div>
                    </Slide>
                    <Slide right>
                      <div className="events-two-two">
                        <img src="https://i.ibb.co/3B2gPNk/diving.jpg" alt="" />

                        <div className="events-two-two-desc">
                          <h3>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus, cum.</h3>
                        </div>

                      </div>
                    </Slide>
                </div>
              </div>
            </div>

            {/* --------------- End of Events Section -------------- */}



            {/* -------- About Section -------- */}
            <div className="about">
              <div className="about-heading">
                <h1>About the Center</h1>
                <h3>designed to accommodate path-breaking ideas, problem-solving postulates, and artistic assertions, creating an environment that encourages innovation and experimentation</h3>
              </div>
              <div className="about-two">
                <div className="about-two-one about-two-cmn">
                  <div className="about-two-one-heading">
                    <h2>Number of wings</h2>
                  </div>
                  <div className="about-two-one-counter counter">
                    <CountUp start={0} duration={4} end={4} redraw={true}>
                      {({ countUpRef, start }) => (
                        <VisibilitySensor onChange={start} delayedCall>
                          <span ref={countUpRef} />
                        </VisibilitySensor>
                      )}
                    </CountUp>
                  </div>
                </div>
                <div className="about-two-two about-two-cmn">
                  <div className="about-two-two-heading">
                    <h2>Student Clubs</h2>
                  </div>
                  <div className="about-two-two-counter counter">
                    <CountUp start={0} duration={10} end={35} redraw={true}>
                      {({ countUpRef, start }) => (
                        <VisibilitySensor onChange={start} delayedCall>
                          <span ref={countUpRef} />
                        </VisibilitySensor>
                      )}
                    </CountUp>
                  </div>
                </div>
                <div className="about-two-three about-two-cmn">
                  <div className="about-two-three-heading">
                    <h2>Faculty Mentors</h2>
                  </div>
                  <div className="about-two-three-counter counter">
                    <CountUp start={0} duration={10} end={47} redraw={true}>
                      {({ countUpRef, start }) => (
                        <VisibilitySensor onChange={start} delayedCall>
                          <span ref={countUpRef} />
                        </VisibilitySensor>
                      )}
                    </CountUp>
                  </div>
                </div>
                <div className="about-two-four about-two-cmn">
                  <div className="about-two-four-heading">
                    <h2>Student Leaders</h2>
                  </div>
                  <div className="about-two-four-counter counter">
                    <CountUp start={0} duration={10} end={54} redraw={true}>
                      {({ countUpRef, start }) => (
                        <VisibilitySensor onChange={start} delayedCall>
                          <span ref={countUpRef} />
                        </VisibilitySensor>
                      )}
                    </CountUp>
                  </div>
                </div>

                <div className="about-two-five about-two-cmn">
                  <div className="about-two-five-heading">
                    <h2>Actively Engaged Students</h2>
                  </div>
                  <div className="about-two-five-counter counter">
                    <CountUp start={0} duration={10} end={314} redraw={true}>
                      {({ countUpRef, start }) => (
                        <VisibilitySensor onChange={start} delayedCall>
                          <span ref={countUpRef} />
                        </VisibilitySensor>
                      )}
                    </CountUp>
                  </div>
                </div>

                <div className="about-two-six about-two-cmn">
                  <div className="about-two-six-heading">
                    <h2>Projects</h2>
                  </div>
                  <div className="about-two-six-counter counter">
                    <CountUp start={0} duration={10} end={8} redraw={true}>
                      {({ countUpRef, start }) => (
                        <VisibilitySensor onChange={start} delayedCall>
                          <span ref={countUpRef} />
                        </VisibilitySensor>
                      )}
                    </CountUp>
                  </div>
                </div>

              </div>

              <center>
                <div className="about-more">
                  <Link className='about-more-link'>More about Student Activity Center</Link>
                </div>
              </center>

            </div>


          


            {/* Frequently Asked Questions */}
            <div className="faq">
                <h1>Frequently asked questions</h1>
                <div className="faqImage">
                </div>
                

                <div className="faqInner">
                    <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                        <Typography>What is a coding club?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        <Typography>
                            A coding club is a group of individuals who gather together to learn, share, and improve their coding skills. It's a place where you can meet like-minded people, work on projects together, and participate in coding challenges.
                        </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                        <Typography>Who can join a coding club?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        <Typography>
                            Anyone can join a coding club, regardless of their age or experience level. Some clubs may have specific requirements or focus on certain programming languages, so be sure to check before joining.
                        </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                        <Typography>What types of activities do coding clubs typically do?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        <Typography>
                            Coding clubs can vary in their activities, but some common ones include working on coding projects, participating in coding challenges, attending workshops or presentations, and networking with other members.
                        </Typography>
                        </AccordionDetails>
                    </Accordion>     
                    <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                        <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
                        <Typography>Do I need to know how to code to join a coding club?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        <Typography>
                            No, you don't need any prior coding experience to join a coding club. In fact, many clubs welcome beginners and offer resources to help them learn.
                        </Typography>
                        </AccordionDetails>
                    </Accordion>   
                    <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
                        <AccordionSummary aria-controls="panel5d-content" id="panel5d-header">
                        <Typography>What programming languages do coding clubs typically focus on?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        <Typography>
                            Coding clubs can focus on a variety of programming languages, depending on the interests of the members. Some common languages include Python, Java, JavaScript, and Ruby.
                        </Typography>
                        </AccordionDetails>
                    </Accordion> 
                    <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
                        <AccordionSummary aria-controls="panel6d-content" id="panel6d-header">
                        <Typography>How often do coding clubs typically meet?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        <Typography>
                            Coding clubs can meet as frequently or infrequently as the members prefer. Some may meet weekly, while others may meet monthly or bi-monthly.
                        </Typography>
                        </AccordionDetails>
                    </Accordion>                  
                </div>
            </div>



            <div className="quicklinks">
              <div className="quicklinks-inner">
                    <div className="quick-one">
                        <h3>Technology Clubs</h3>
                        <ul>
                          <li><Link className='qls'>Coding School</Link></li>
                          <li><Link className='qls'>Cyber Security</Link></li>
                          <li><Link className='qls'>Automation</Link></li>
                          <li><Link className='qls'>Robotics</Link></li>
                          <li><Link className='qls'>Automobile</Link></li>
                          <li><Link className='qls'>Game Development</Link></li>
                        </ul>
                    </div>
                    <div className="quick-two">
                        <h3>Liberal Arts</h3>
                        <ul>
                          <li><Link className='qls'>Music Club</Link></li>
                          <li><Link className='qls'>Narthana Club</Link></li>
                          <li><Link className='qls'>Fusion Club</Link></li>
                          <li><Link className='qls'>Standup Comedy</Link></li>
                          <li><Link className='qls'>Muse Arts</Link></li>
                          <li><Link className='qls'>Dramatics</Link></li>
                        </ul>
                    </div>
                    <div className="quick-three">
                          <div className="quick-three-one">
                            <h3>Innovation and Incubation</h3>
                            <ul>
                              <li><Link className='qls'>ACIC</Link></li>
                              <li><Link className='qls'>Start in Collge</Link></li>
                              <li><Link className='qls'>Ideas Hub</Link></li>
                            </ul>
                          </div>
                    </div>
                    <div className="quick-four">
                    <h3>Society and Outreach</h3>
                            <ul>
                            <li><Link className='qls'>Smart Village Revolution</Link></li>
                              <li><Link className='qls'>NSS</Link></li>
                              <li><Link className='qls'>NSS</Link></li>
                              <li><Link className='qls'>NCC</Link></li>
                              <li><Link className='qls'>Safe Life</Link></li>
                              <li><Link className='qls'>CEA</Link></li>
                            </ul>
                    </div>
              </div>
              <div className="quick-image">
                <a href="https://www.kluniversity.in/"><img src="https://i.ibb.co/YhMKv90/sac-logo-68af69157709144b2811.png" alt="" /></a>
              </div>
            </div>
            
            
        </div>
        <Footer></Footer>
    </div>


  )
}

export default Home
