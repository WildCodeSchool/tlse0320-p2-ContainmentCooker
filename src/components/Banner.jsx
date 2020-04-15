import React from 'react';
// import img from './BannerImg.jpg';
import './Banner.css';

function Banner() {
  return (
    <div className="Bann">
      <div className="Banner">
        <h1 id="Title"> Grilled Meat Skewers </h1>
      </div>
      <div className="BannerBottom">
        <h2 className="TitleBanner">Recipes</h2>
        <h2 className="TitleBanner">Contact</h2>
      </div>
    </div>
  );
}

export default Banner;
