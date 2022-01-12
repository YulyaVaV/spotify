import React from 'react';
import './ArtistReleated.scss';

//@ts-ignore
import {ReleatedItem} from '../../../../ui/ReleatedItem/ReleatedItem.tsx';
//@ts-ignore
import {artist} from '../ArtistPlaylist/artist.ts';

const ArtistReleated = () => {
  return (
    <div className="artist-releated">
      <h5 className="artist-releated__title">RELEATED ARTISTS</h5>
      <div className="artist-releated__artists">
        {
          artist.map(item => (
            <ReleatedItem
              img={item.img}
              name={item.name}
            />
          ))
        }
      </div>
    </div>
  )
}

export default ArtistReleated
