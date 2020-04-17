import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer>
      <ul className="footer1">
        <li>Newsletter</li>
        <li>
          <input type="email" name="email" placeholder="@" />
        </li>
        <li>
          <button type="button" className="button" title="S'abonner">
            S'abonner
          </button>
        </li>
      </ul>
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
      <div class="footer3">
        <ul class="socialNet">
          <li>
            <img src="img/faceb.png" alt="Facebook" />
          </li>
          <li>
            <img src="img/tweet.png" alt="Tweeter" />
          </li>
          <li>
            <img src="img/insta.png" alt="Instagram" />
          </li>
          <li>
            <img src="img/yt.png" alt="Youtube" />
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
