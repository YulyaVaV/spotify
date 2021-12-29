import React from 'react';

import './Lists.scss';

interface Props {
  icon: any,
  title: string,
}

export const Lists:React.FC<Props> = ({icon, title}): JSX.Element  => {
  return (
    <a href='/' className="lists">
      <p className="lists__icon">{icon}</p>
      <p className="lists__title">{title}</p>
    </a>
  )
}
