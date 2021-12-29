import React from 'react';
import './Button.scss';

interface Props {
  value: string;
}

const Button: React.FC<Props> = ({value}): JSX.Element => {
  return (
    <div>
      {value === 'SAVE' ? (
      <a href="/" className="button__green">{value}</a>
     ) : (
      <a href="/" className="button">{value}</a>
     )}
    </div>
  )
}

export default Button
