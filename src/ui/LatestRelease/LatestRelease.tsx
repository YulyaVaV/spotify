import React from 'react';
import './LatestRelease.scss';

const LatestRelease = () => {
  return (
    <div className="latest-release">
        <h5 className="latest-release__title">LATEST RELEASE</h5>
        <div className="latest-release__track">
          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/whenDarkOut.jpg" alt="When It's Dark Out" className="latest-release__track latest-release__track--img"/>
          <div className="latest-release__track latest-release__track--song">
            <p className="latest-release__track latest-release__track--name">Drifting (Track Commentary)</p>
            <p className="latest-release__track latest-release__track--data">4 December 2015</p>
          </div>
          </div>
    </div>
  )
}

export default LatestRelease
