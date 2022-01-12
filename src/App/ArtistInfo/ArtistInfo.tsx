import React from 'react';
import './ArtistInfo.scss';
//@ts-ignore
import MainButton from '../../ui/MainButton/MainButton.tsx';
//@ts-ignore
import ArtistTablist from './component/TablistSwitch/TablistSwitch.tsx';

export const ArtistInfo: React.FC = (): JSX.Element => {
  return (
    <div className="middle">
      <div className="middle__header">
        <div className="middle__info">
          <div className="middle__img">
            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/g_eazy_propic.jpg" alt="G-Eazy" className="middle__photo"/>
            <span className="middle__done-img material-icons">done</span>
          </div>
          <div className="middle__wrapper">
            <div className="middle__meta">
              <div className="middle__type">Artist</div>
              <div className="middle__name">G-Eazy</div>
              <div className="middle__actions">
                <a href="/" className="middle__play-btn">
                  <i className="material-icons">play_arrow</i>
                  Play
                </a>
                <MainButton 
                  value='Follow'
                />
                <a href='/' className="middle__more-btn material-icons">more_horiz</a>
              </div>
            </div>
            <div className="middle__listeners">
              <div className="middle__listeners middle__listeners--count">15,662,810</div>
              <div className="middle__listeners middle__listeners--label">Monthly Listeners</div>
            </div>
          </div>
        </div>
        <ArtistTablist />
      </div>
    </div>
  )
}
