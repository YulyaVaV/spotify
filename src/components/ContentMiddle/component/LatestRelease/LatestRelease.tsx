import React from 'react';
import './LatestRelease.scss';

const LatestRelease = () => {
  return (
    <div className="latestRelease">
      <div className="latestRelease__latest">
        <h5 className="latestRelease latestRelease__latest--title">LATEST RELEASE</h5>
        <div className="latestRelease__track">
          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/whenDarkOut.jpg" alt="When It's Dark Out" className="latestRelease__track--img"/>
          <div className="latestRelease latestRelease__track--song">
            <p className="latestRelease latestRelease__track--name">Drifting (Track Commentary)</p>
            <p className="latestRelease latestRelease__track--data">4 December 2015</p>
          </div>
        </div>
      </div>   
    </div>
  )
}

export default LatestRelease
