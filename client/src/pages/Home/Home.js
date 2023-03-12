import React from 'react';
import '../Home/Home.css'; 

const Home = () => {
  return (
    <div className='HomeComponent'>
        <div className="HomeContainer">

            <div className="events">
              <div className="events-heading">
                <h1>News at SAC</h1>
                <h3>Stories about people, research, and innovation across the Farm</h3>
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
        </div>
    </div>
  )
}

export default Home
