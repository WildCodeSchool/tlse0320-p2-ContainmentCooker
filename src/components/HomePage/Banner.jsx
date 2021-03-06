import React from 'react';
import './Banner.css';
import { Link } from 'react-router-dom';
import Grill from '../Images/grill.png';
import Ham from '../Images/ham.png';
import Ribs from '../Images/ribs.png';

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
        <Link to="/advanced-search-page" className="TitleBanner title-recipes">
          Recipes
        </Link>
        <Link to="/contact" className="TitleBanner title-contact">
          Contact
        </Link>
      </div>
    </div>
  );
}

export default Banner;
