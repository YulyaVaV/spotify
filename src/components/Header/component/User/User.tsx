import React from 'react';

import './User.scss';

interface Props {
  section: string,
}

export const User: React.FC<Props> = ({section}): JSX.Element => {
  return (
    <a href="/" className="user">{section}</a>
  )
}
