import React from 'react';
import '../Home/Home.css'; 



import CountUp, {startAnimation} from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor'; 



const Home  = () => {
  return (
    <div className='HomeComponent'>
        <div className="HomeContainer">



            {/* --------Events Section-------- */}
            <div className="events">
              <div className="events-heading">
                <h1>News at SAC</h1>
                <h3>Stories about people, research, and innovation across the center</h3>
              </div>
              <div className="events-inner">
                <div className="events-one">
                  <div className="events-one-one">
                    <img src="https://i.ibb.co/D88QZbK/womenstanding.webp" alt="" />

                    <div className="events-one-one-desc">
                    <h3>Anne Lorem.</h3>
                    <h5>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis eum, laborum molestias cupiditate magni laboriosam expedita? Repellat, earum debitis! Quos.</h5>
                    </div>
                  </div>
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
                </div>
                <div className="events-two">
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
                    <div className="events-two-two">
                      <img src="https://i.ibb.co/3B2gPNk/diving.jpg" alt="" />

                      <div className="events-two-two-desc">
                        <h3>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus, cum.</h3>
                      </div>

                    </div>
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
            </div>
        </div>
    </div>
  )
}

export default Home
