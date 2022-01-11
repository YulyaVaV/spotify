import React from 'react';
import './ArtistSongs.scss';

//@ts-ignore
import { SongItem } from '../SongItem/SongItem.tsx';
//@ts-ignore
import {songs} from '../ArtistPlaylist/songs.tsx';

const ArtistSongs = () => {
  return (
    <div className="artistSongs">
      <div className="artistSongs__songs">
        <div className="artistSongs artistSongs__songs--wrapper">
          <div className="artistSongs artistSongs__songs--song">
            <p className="artistSongs artistSongs__songs--grate">#</p>
            <h6 className="artistSongs artistSongs__songs--title">SONG</h6>
          </div>
          <div className="artistSongs artistSongs__songs--icons">
            <i className="material-icons">timer</i>
            <i className="artistSongs artistSongs__songs--icon material-icons">thumb_up_alt</i>
          </div>
        </div>
        <div className="artistSongs artistSongs__songs--content">
          {
            songs.map(item => (
              <SongItem
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
  )
}

export default ArtistSongs
