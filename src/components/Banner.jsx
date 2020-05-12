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
            Wanna see a recipe ?
          </Link>
          <Link to="/randompage" type="button" className="ButtonBanner">
            Click here !
          </Link>
        </div>
        <div className="LogosBanner">
          <div>
            <img src={Grill} className="BannLogo" alt="" />
          </div>
          <div>
            <img src={Ham} className="BannLogo" alt="" />
          </div>
          <div>
            <img src={Ribs} className="BannLogo" alt="" />
          </div>
        </div>
      </div>
      <div className="BannerBottom">
        <h2 className="TitleBanner">Recipes</h2>
        <Link to="/contact" className="TitleBanner">
          Contact
        </Link>
      </div>
    </div>
  );
}

export default Banner;
