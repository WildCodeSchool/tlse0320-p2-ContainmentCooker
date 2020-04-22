import React from 'react';
import './Footer.css';
import { Button, UncontrolledPopover, PopoverHeader, PopoverBody } from 'reactstrap';
import Facebook from './faceb.png';
import Instagram from './insta.png';
import Youtube from './yt.png';
import Tweeter from './tweet.png';

function Footer() {
  return (
    <div>
      <div>
        <ul className="footer1">
          <li>Newsletter</li>
          <li>
            <input type="email" name="email" placeholder="@" />
          </li>
        </ul>
      </div>
      <div>
        <Button id="UncontrolledPopover" type="button">
          S'abonner
        </Button>
        <UncontrolledPopover placement="bottom" target="UncontrolledPopover">
          <PopoverHeader>Abonnement réussi</PopoverHeader>
          <PopoverBody>
            C'est bon , vous etes bien inscrit à notre Newsletter, vous recevrez toutes les News du
            site .
          </PopoverBody>
        </UncontrolledPopover>
      </div>
      <div>
        <ul className="footer2">
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
      <div className="footer3">
        <ul className="socialNet">
          <li>
            <img src={Facebook} alt="Facebook" />
          </li>
          <li>
            <img src={Tweeter} alt="Tweeter" />
          </li>
          <li>
            <img src={Instagram} alt="Instagram" />
          </li>
          <li>
            <img src={Youtube} alt="Youtube" />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
