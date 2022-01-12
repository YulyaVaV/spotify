import React from 'react';
import './ArtistAlbums.scss';

//@ts-ignore
import ArtistSongs from '../../App/ArtistInfo/component/ArtistSongs/ArtistSongs.tsx';

const ArtistAlbums = () => {
  return (
    <div className="artist-albums">
      <div className="artist-albums__head">
        <h6 className="artist-albums__title">ALBUMS</h6>
        <div className=" artist-albums__head--icons">
          <i className="artist-albums__head--icons artist-albums__head--other material-icons">format_list_bulleted</i>
          <i className="artist-albums__head--icons artist-albums__head--another material-icons">grid_view</i>
        </div>
      </div>
      <div className="artist-albums__info">
        <div >
          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/whenDarkOut.jpg" alt="When It's Dark Out" className="artist-albums__image"/>
        </div>
        <div className="artist-albums__meta">
          <p className="artist-albums__year">2015</p>
          <h2 className="artist-albums__name">When It's Dark Out</h2>
          <div className="artist-albums__buttons">
          <a href='/' className="artist-albums__save">SAVE</a>
            <a href='/' className="middle__more-btn material-icons">more_horiz</a>
          </div>
        </div>
      </div>
      <ArtistSongs />
    </div>
  )
}

export default ArtistAlbums
