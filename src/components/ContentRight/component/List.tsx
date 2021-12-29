import React from 'react';
import './List.scss';

export interface Props {
  img: any;
  name: string;
}

export const List: React.FC<Props> = ({img, name}): JSX.Element => {
  return (
    <div className="list">
      <div className="list__wrapp">
        <span className="list__wrapp--img">{img}</span>
        <a href="/" className="list__wrapp--name">{name}</a>
      </div>
    </div>
  )
}
