import React from 'react';
import './ArtistSongs.scss';

//@ts-ignore
import { SongItem } from '../../../../ui/SongItem/SongItem.tsx';
//@ts-ignore
import {songs} from '../ArtistPlaylist/songs.tsx';

const ArtistSongs = () => {
  return (
    <div className="artist-songs">
      <div className="artist-songs__wrapper">
        <div className="artist-songs__song">
          <p className="artist-songs__grate">#</p>
          <h6 className="artist-songs__title">SONG</h6>
        </div>
        <div className="artist-songs__icons">
          <i className="material-icons">timer</i>
          <i className="artist-songs__icon material-icons">thumb_up_alt</i>
        </div>
      </div>
      <div className="artist-songs__content">
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
  )
}

export default ArtistSongs
