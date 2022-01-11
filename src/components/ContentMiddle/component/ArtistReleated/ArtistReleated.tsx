import React from 'react';
import './ArtistReleated.scss';

//@ts-ignore
import {ReleatedArtists} from '../ReleatedArtists/ReleatedArtists.tsx';
//@ts-ignore
import {artist} from '../ArtistPlaylist/artist.ts';

const ArtistReleated = () => {
  return (
    <div className="artistReleated">
      <div className="artistReleated__releated">
        <h5 className="artistReleated__title">RELEATED ARTISTS</h5>
        <div className="artistReleated__artists">
          {
            artist.map(item => (
              <ReleatedArtists
                img={item.img}
                name={item.name}
              />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default ArtistReleated
