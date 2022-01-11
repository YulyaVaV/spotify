import React from 'react';
import './MainButton.scss';

interface Props {
  value: string;
}

const MainButton: React.FC<Props> = ({value}): JSX.Element => {
  return (
    <div>
      <a href="/" className="mainButton">{value}</a>
    </div>
  )
}

export default MainButton
