import React from 'react';
import './Footer.css';
import { Button, UncontrolledPopover, PopoverHeader, PopoverBody } from 'reactstrap';
import Facebook from './faceb.png';
import Instagram from './insta.png';
import Youtube from './yt.png';
import Tweeter from './tweet.png';

function Footer() {
  return (
    <div className="Footer">
      <div>
        <ul className="FooterUp">
          <li>Newsletter</li>
          <li>
            <input type="email" name="email" placeholder="@" />
          </li>
        </ul>
      </div>
      <div className="DivFooterButton">
        <Button id="FooterButton" type="button">
          S'abonner
        </Button>
        <UncontrolledPopover placement="bottom" target="FooterButton">
          <PopoverHeader>Abonnement réussi</PopoverHeader>
          <PopoverBody>Vous êtes bien inscrits à notre Newsletter !</PopoverBody>
        </UncontrolledPopover>
      </div>
      <div>
        <ul className="FooterMiddle">
          <li>
            <a href="aboutus.html" title="A propos de l'équipe">
              À propos
            </a>
          </li>
          <li>
            <a href="#" title="Mentions légales">
              Mentions légales
            </a>
          </li>
        </ul>
      </div>
      <div className="FooterBottom">
        <ul className="socialNet">
          <li className="LogosFooter">
            <img className="LogosSocial" src={Facebook} alt="Facebook" />
          </li>
          <li className="LogosFooter">
            <img className="LogosSocial" src={Tweeter} alt="Tweeter" />
          </li>
          <li className="LogosFooter">
            <img className="LogosSocial" src={Instagram} alt="Instagram" />
          </li>
          <li className="LogosFooter">
            <img className="LogosSocial" src={Youtube} alt="Youtube" />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
