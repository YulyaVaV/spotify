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
    <div className="songs">
      <div className="songs__content">
        <p className="songs__number">{id}</p>
        <div className="songs__icon">{icon}</div>
        <div className="songs__sing">
           <div className="songs__title">{name}</div>
           <p className="songs__artist">{artist}</p>
        </div>
      </div>
      <div className="songs__wrap">
        <div className="songs__explicit">{explicit}</div>
        <p className="songs__time">{time}</p>
        <div className="songs__arrow">{arrow}</div>
      </div>
    </div>
  )
}
