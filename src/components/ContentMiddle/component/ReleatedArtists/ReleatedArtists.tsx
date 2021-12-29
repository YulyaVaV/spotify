import React from 'react';

import './ReleatedArtists.scss';

export interface Props {
  img: any;
  name: string;
}

export const ReleatedArtists: React.FC<Props> = ({ img, name }): JSX.Element => {
  return (
    <a className="releatedArtist" href='/'>
      <img src={img} alt="" className="releatedArtist__img"/>
      <p className="releatedArtist__name">{name}</p>
    </a>
  )
}
