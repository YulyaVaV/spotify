import React from 'react';
import './ListFriends.scss';

export interface Props {
  img: any;
  name: string;
}

export const ListFriends: React.FC<Props> = ({img, name}): JSX.Element => {
  return (
    <div className="list-friends">
      <div className="list-friends__wrapp">
        <span className="list-friends__img">{img}</span>
        <a href="/" className="list-friends__name">{name}</a>
      </div>
    </div>
  )
}
