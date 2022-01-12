import React from 'react';

import './ArtistPlaylist.scss';
//@ts-ignore
import LatestRelease from '../../../../ui/LatestRelease/LatestRelease.tsx';
//@ts-ignore
import ArtistPopular from '../ArtistPopular/ArtistPopular.tsx';
//@ts-ignore
import ArtistReleated from '../ArtistReleated/ArtistReleated.tsx';
//@ts-ignore
import ArtistAlbums from '../../../../ui/ArtistAlbums/ArtistAlbums.tsx';


const ArtistPlaylist: React.FC = (): JSX.Element => {
  return (
    <div className="artist-playlist">
      <div className="artist-playlist__wrapper">
        <div className="artist-playlist__overview">
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
