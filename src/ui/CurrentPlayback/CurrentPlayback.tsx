import React from 'react';
import './CurrentPlayback.scss';

const CurrentPlayback = () => {
  return (
    <div className="current-playback">
      <div className="current-playback__art">
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/cputh.jpg" alt="Album Art" className="current-playback__img"/>
      </div>
      <div className="current-playback__song">
        <a href="/" className="current-playback__name">Some Type of Love</a>
        <a href="/" className="current-playback__artist">Charlie Puth</a>
      </div>
      <div className="current-playback__add">
        <i className="material-icons">done</i>
      </div>
    </div>
  )
}

export default CurrentPlayback
