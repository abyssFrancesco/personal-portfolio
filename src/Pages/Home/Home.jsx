import React from "react";
import "./Home.css";
import Navbar from "../../Components/Navbar/Navbar";
import pfp from "../../assets/pfp2.jpeg";
import Footer from "../../Components/Footer/Footer";

const Home = () => {





  
  return (
    <div className="home B">
      <Navbar />
      <div className="home-content IB">
        <div className="title B">
          <h1>hello, Francesco here</h1>
        </div>
        <div className="desc IB">
          <p>
            Hi, I'm Francesco, a passionate developer specializing in web
            technologies.
          </p>
        </div>
        <div className="img IB">
          <img src={pfp} alt="" />
        </div>
        <div className="type-box B">
          <div className="type IB">
            <h2>Recently Played</h2>
          </div>
          <div className="tab">
            <h2>Recently Played</h2>
            <h2>Top Tracks</h2>
          </div>
        </div>
        <div className="frame-box ">
          <div className="big-frame IB">
            <iframe
              data-testid="embed-iframe"
              src="https://open.spotify.com/embed/track/0OwVWxzXvFiE3Du8KvbRXx?utm_source=generator"
              width="100%"
              height="352"
              frameBorder="0"
              allowFullScreen=""
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          </div>
          <div className="small-frame IB">
            <div className="song">
              <iframe
                data-testid="embed-iframe"
                src="https://open.spotify.com/embed/track/2LGdO5MtFdyphi2EihANZG?utm_source=generator"
                width="100%"
                height="80"
                frameBorder="0"
                allowFullScreen=""
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              ></iframe>
            </div>
            <div className="song">
              <iframe
                data-testid="embed-iframe"
                src="https://open.spotify.com/embed/track/2LGdO5MtFdyphi2EihANZG?utm_source=generator"
                width="100%"
                height="80"
                frameBorder="0"
                allowFullScreen=""
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              ></iframe>
            </div>
            <div className="song">
              <iframe
                data-testid="embed-iframe"
                src="https://open.spotify.com/embed/track/2LGdO5MtFdyphi2EihANZG?utm_source=generator"
                width="100%"
                height="80"
                frameBorder="0"
                allowFullScreen=""
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              ></iframe>
            </div>
            <div className="song">
              <iframe
                data-testid="embed-iframe"
                src="https://open.spotify.com/embed/track/2LGdO5MtFdyphi2EihANZG?utm_source=generator"
                width="100%"
                height="80"
                frameBorder="0"
                allowFullScreen=""
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Home;
