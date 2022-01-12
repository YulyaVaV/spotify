import React from 'react';

import './SongItem.scss';

interface Props {
  id: number,
  icon: any,
  name: any,  
  explicit: string,
  time: string,
  arrow: any,
  artist: string
}
    
export const SongItem: React.FC<Props> = ({id, icon, name, explicit, time, artist, arrow}): JSX.Element => {
  return (
    <div className="song-item">
      <div className="song-item__content">
        <p className="song-item__number">{id}</p>
        <div className="song-item__icon">{icon}</div>
        <div className="song-item__sing">
           <div className="song-item__title">{name}</div>
           <p className="song-item__artist">{artist}</p>
        </div>
      </div>
      <div className="song-item__wrap">
        <div className="song-item__explicit">{explicit}</div>
        <p className="song-item__time">{time}</p>
        <div className="song-item__arrow">{arrow}</div>
      </div>
    </div>
  )
}
