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
      <div className="FooterUpper">
        <h2 className="FooterUpName">Newsletter</h2>
        <div className="FooterUp">
          <ul className="FooterEmail">
            <li>
              <input type="email" name="email" placeholder="Enter your email" />
            </li>
          </ul>
          <Button id="PopoverFocus" type="button">
            Subscribe!
          </Button>
          <UncontrolledPopover trigger="focus" placement="bottom" target="PopoverFocus">
            <PopoverHeader>Abonnement réussi</PopoverHeader>
            <PopoverBody>Vous êtes bien inscrits à notre Newsletter !</PopoverBody>
          </UncontrolledPopover>
        </div>
      </div>

      <div className="FooterBottom">
        <div>
          <h2 className="FooterBottomName">Follow us</h2>
          <ul className="socialNet">
            <li className="LogosFooter">
              <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/">
                <img className="LogosSocial" src={Facebook} alt="Facebook" />
              </a>
            </li>
            <li className="LogosFooter">
              <a target="_blank" rel="noopener noreferrer" href="https://www.twitter.com/">
                <img className="LogosSocial" src={Tweeter} alt="Tweeter" />
              </a>
            </li>
            <li className="LogosFooter">
              <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/">
                <img className="LogosSocial" src={Instagram} alt="Instagram" />
              </a>
            </li>
            <li className="LogosFooter">
              <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/">
                <img className="LogosSocial" src={Youtube} alt="Youtube" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
