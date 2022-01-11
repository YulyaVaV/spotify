import React from 'react';
import './CurrentPlayback.scss';

const CurrentPlayback = () => {
  return (
    <div className="currentPlayback">
      <div className="currentPlayback__playing--art">
          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/cputh.jpg" alt="Album Art" className="currentPlayback__playing--img"/>
        </div>
        <div className="currentPlayback__playing--song">
          <a href="/" className="currentPlayback__playing--name">Some Type of Love</a>
          <a href="/" className="currentPlayback__playing--artist">Charlie Puth</a>
        </div>
        <div className="currentPlayback__playing--add">
          <i className="material-icons">done</i>
        </div>
    </div>
  )
}

export default CurrentPlayback