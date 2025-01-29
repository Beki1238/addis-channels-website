import React from 'react';
import Channels from './Channels';
import heroBg from '../assets/10.jpg';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="container">
        <img src={heroBg} alt="Background" />
        <div className="home-text">
          <span>Welcome to</span>
          <h1>Addis Media</h1>
          <p>Your source for sports, entertainment, and more!</p>
          <div className="buttons">
            <a href="/channels" className="btn">Explore Channels</a>
            <a href="/videos" className="btn" style={{ marginLeft: '1rem' }}>Watch Videos</a>
          </div>
        </div>
        <div className="play">
          <button className="btn-subscribe">Subscribe</button>
        </div>
      </div>

      {/* Channels Section */}
      <div className="channels-section">
        <Channels />
      </div>
    </div>
  );
};

export default Home;