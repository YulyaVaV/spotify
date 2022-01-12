import React from 'react';

import './MenuItem.scss';

interface Props {
  icon: any,
  title: string,
}

export const MenuItem:React.FC<Props> = ({icon, title}): JSX.Element  => {
  return (
    <a href='/' className="menu-item">
      <p className="menu-item__icon">{icon}</p>
      <p className="menu-item__title">{title}</p>
    </a>
  )
}
