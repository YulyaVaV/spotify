import React from 'react';

import './ArtistPlaylist.scss';
//@ts-ignore
import LatestRelease from '../LatestRelease/LatestRelease.tsx';
//@ts-ignore
import ArtistPopular from '../ArtistPopular/ArtistPopular.tsx';
//@ts-ignore
import ArtistReleated from '../ArtistReleated/ArtistReleated.tsx';
//@ts-ignore
import ArtistAlbums from '../ArtistAlbums/ArtistAlbums.tsx';


const ArtistPlaylist: React.FC = (): JSX.Element => {
  return (
    <div className="artistPlaylist">
      <div className="artistPlaylist__wrapper">
        <div className="artistPlaylist__overview">
          <LatestRelease />
          <ArtistPopular />
        </div>
        <ArtistReleated />
      </div>
      <ArtistAlbums />
    </div>
  )
}

export default ArtistPlaylist;
