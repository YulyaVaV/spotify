import React from 'react';
import './ArtistAlbums.scss';

//@ts-ignore
import { Songs } from '../Songs/Songs.tsx';
//@ts-ignore
import {songs} from '../ArtistPlaylist/songs.tsx';

const ArtistAlbums = () => {
  return (
    <div className="artistAlbums">
      
      <div className="artistAlbums__albums">
        <div className="artistAlbums__head">
          <h6 className="artistAlbums__head--title">ALBUMS</h6>
          <div className="artistAlbums__head--icons">
          <i className="artistAlbums__head--icon artistAlbums__head--other material-icons">format_list_bulleted</i>
          <i className="artistAlbums__head--icon artistAlbums__head--another material-icons">grid_view</i>
          </div>
        </div>
        <div className="artistAlbums__albums--info">
          <div >
            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/whenDarkOut.jpg" alt="When It's Dark Out" className="artistAlbums__albums--image"/>
          </div>
          <div className="artistAlbums__albums--meta">
            <p className="artistAlbums__albums--year">2015</p>
            <h2 className="artistAlbums__albums--title">When It's Dark Out</h2>
            <div className="artistAlbums__albums--buttons">
            <a href='/' className="artistAlbums__albums--save">SAVE</a>
             <a href='/' className="middle__button--more material-icons">more_horiz</a>
            </div>
          </div>
        </div>

        <div className="artistAlbums__songs">
          <div className="artistAlbums__songs--wrapper">
            <div className="artistAlbums__songs--song">
              <p className="artistAlbums__songs--grate">#</p>
              <h6 className="artistAlbums__songs--title">SONG</h6>
            </div>
            <div className="artistAlbums__songs--icons">
              <i className="material-icons">timer</i>
              <i className="artistAlbums__songs--icon material-icons">thumb_up_alt</i>
            </div>
          </div>
          <div className="artistAlbums__songs--content">
            {
              songs.map(item => (
                <Songs
                  id={item.id}
                  icon={item.icon}
                  name={item.name}
                  explicit={item.explicit}
                  time={item.time}
                  arrow={item.arrow}
                  artist={item.artist} 
                />
              ))
            }
          </div>
        </div>
      </div> 
    </div>
  )
}

export default ArtistAlbums
