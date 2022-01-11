import React from 'react';

import './PopularItem.scss';

export interface Props {
  img: any;
  id: number;
  name: string;
  icon: any;
  explicit: string;
  number: string;
}

export const PopularItem:React.FC<Props> = ({img, id, name, icon, explicit, number }): JSX.Element => {
  return (
    <div className="popular">
      <img src={img} alt="" className="popular__img"/>
      <p className="popular__id">{id}</p>
      <span className="popular__icon">{icon}</span>
      <p className="popular__name">{name}</p>
      <span className="popular__explicit">{explicit}</span>
      <span className="popular__number">{number}</span>
    </div>
  )
}
