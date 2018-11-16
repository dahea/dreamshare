// Stateless/functional components used instead of React class because state and lifecycle functions (componentDidMount, componentDidUpdate) were not needed

import React from 'react';

const Hero = () => (
  <div className="hero">
    <div className="inset">
      <div className="branding">Dreamshare</div>
      <nav>
        <a href="#" className="nav-item">Log in</a>
        <a href="#" className="nav-item btn-invert-white-sm">Sign up</a>
      </nav>
      <div className="intro">
        <div className="title-lg-white">Share your holiday dream</div>
        <p>And find the perfect partner to fullfill it</p>
        <a href="#" className="btn-main">Find your holiday partner</a>
      </div>
    </div>
  </div>
)

export default Hero;
