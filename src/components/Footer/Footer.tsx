import React from 'react';
import './Footer.scss';
import "nouislider/distribute/nouislider.css";

export const Footer: React.FC = (): JSX.Element => {
  return (
    <div className="footer">
      <div className="footer__left">
        <div className="footer__images">
          <a href="/" className="footer__img material-icons">skip_previous</a>
          <a href="/" className="footer__img footer__img--center material-icons">play_arrow</a>
          <a href="/" className="footer__img material-icons">skip_next</a>
        </div>
        <div className="footer__tracker">
          <p>0:01</p>
          <div className="footer__range">
            <input type="range" min="35" max="100" className="footer__range--trick" id="slider" />
          </div>
          <p>3:07</p>
        </div>
      </div>
      
      <div className="footer__wrapper">
        <div className="footer__icons">
          <a href="/" className="footer__lyrics">LYRICS</a>
          <a href="/" className="footer__icon material-icons">reorder</a>
          <a href="/" className="footer__icon material-icons">shuffle</a>
          <a href="/" className="footer__icon material-icons">autorenew</a>
        </div>

        <a href="/" className="footer__device">
          <span className="footer__icon material-icons">phone_iphone</span>
          <span className="footer__device--title">DEVICES AVAILABE</span>
        </a>

        <div className="footer__volume">
          <span className="footer__icon material-icons">volume_up</span>
            <input type="range" max="100" min="-95" className="footer__volume--range "/>
        </div>

      </div>
    </div>
  )
}
