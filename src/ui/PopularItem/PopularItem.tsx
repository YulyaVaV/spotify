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
    <div className="popular-item">
      <img src={img} alt="" className="popular-item__img"/>
      <p className="popular-item__id">{id}</p>
      <span className="popular-item__icon">{icon}</span>
      <p className="popular-item__name">{name}</p>
      <span className="popular-item__explicit">{explicit}</span>
      <span className="popular-item__number">{number}</span>
    </div>
  )
}
