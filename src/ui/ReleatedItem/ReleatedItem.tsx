import React from 'react';

import './ReleatedItem.scss';

export interface Props {
  img: any;
  name: string;
}

export const ReleatedItem: React.FC<Props> = ({ img, name }): JSX.Element => {
  return (
    <a className="releated-artist" href='/'>
      <img src={img} alt="" className="releated-artist__img"/>
      <p className="releated-artist__name">{name}</p>
    </a>
  )
}
