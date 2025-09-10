import React from "react";
import "./Home.css";
import Navbar from "../../Navbar";
import pfp from "../../../../assets/pfp2.jpeg";

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
        <div className="frame-box B">
          <div className="big-frame">
            <iframe
              data-testid="embed-iframe"
              src="https://open.spotify.com/embed/track/0OwVWxzXvFiE3Du8KvbRXx?utm_source=generator"
              width="100%"
              height="352"
              frameBorder="0"
              allowFullScreen=""
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>{" "}
          </div>
          <div className="small-frame">
            <iframe src="https://open.spotify.com/embed/track/0fNKABHyuS6JHqmQyZv3fM?utm_source=generator"></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
