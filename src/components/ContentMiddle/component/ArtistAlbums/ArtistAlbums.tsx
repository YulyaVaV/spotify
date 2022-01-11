import React from 'react';
import './ArtistAlbums.scss';

//@ts-ignore
import ArtistSongs from '../ArtistSongs/ArtistSongs.tsx';

const ArtistAlbums = () => {
  return (
    <div className="artistAlbums">
      <div className="artistAlbums__albums">
        <div className="artistAlbums__head">
          <h6 className="artistAlbums artistAlbums__head--title">ALBUMS</h6>
          <div className="artistAlbums artistAlbums__head--icons">
          <i className="artistAlbums artistAlbums__head--icon artistAlbums__head--other material-icons">format_list_bulleted</i>
          <i className="artistAlbums artistAlbums__head--icon artistAlbums__head--another material-icons">grid_view</i>
          </div>
        </div>
        <div className="artistAlbums artistAlbums__albums--info">
          <div >
            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/whenDarkOut.jpg" alt="When It's Dark Out" className="artistAlbums__albums--image"/>
          </div>
          <div className="artistAlbums artistAlbums__albums--meta">
            <p className="artistAlbums artistAlbums__albums--year">2015</p>
            <h2 className="artistAlbums artistAlbums__albums--title">When It's Dark Out</h2>
            <div className="artistAlbums artistAlbums__albums--buttons">
            <a href='/' className="artistAlbums artistAlbums__albums--save">SAVE</a>
             <a href='/' className="artistAlbums middle__button--more material-icons">more_horiz</a>
            </div>
          </div>
        </div>
        <ArtistSongs />
      </div> 
    </div>
  )
}

export default ArtistAlbums
