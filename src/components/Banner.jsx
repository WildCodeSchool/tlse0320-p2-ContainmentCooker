import React from 'react';
import './Css/Banner.css';
import { Link } from 'react-router-dom';
import Grill from './grill.png';
import Ham from './ham.png';
import Ribs from './ribs.png';

function Banner() {
  return (
    <div className="Bann">
      <div className="BannerUp">
        <div className="TitleButton">
          <Link to="/randompage" className="TitleRecipe">
            Do not have any idea ?
          </Link>
          <Link to="/randompage" type="button" className="ButtonBanner">
            See a recipe
          </Link>
        </div>
        <div className="LogosBanner">
          <img src={Grill} className="GrillLogo" alt="" />
          <img src={Ham} className="HamLogo" alt="" />
          <img src={Ribs} className="RibsLogo" alt="" />
        </div>
      </div>
      <div className="BannerBottom">
        <h2 className="TitleBanner">Recipes</h2>
        <h2 className="TitleBanner">Contact</h2>
      </div>
    </div>
  );
}

export default Banner;
