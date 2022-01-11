import React from 'react';

import './MenuItem.scss';

interface Props {
  icon: any,
  title: string,
}

export const MenuItem:React.FC<Props> = ({icon, title}): JSX.Element  => {
  return (
    <a href='/' className="menuItem">
      <p className="menuItem__icon">{icon}</p>
      <p className="menuItem__title">{title}</p>
    </a>
  )
}
